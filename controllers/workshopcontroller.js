const WorkshopApplication = require('../models/workshopmodels');
const nodemailer = require('nodemailer');
const PDFDocument = require('pdfkit');
const path = require('path');
const fs = require('fs');

// ✅ Assets Paths
const signatureImagePath = path.resolve(__dirname, "../assets/sign.png");
const logo_mywebsite = path.resolve(__dirname, "../assets/logo.jpeg");

// Email Configuration
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: process.env.SMTP_PORT || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});

// Format date helper
function formatDate(dateStr) {
  if (!dateStr) return new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
  const date = new Date(dateStr);
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  return date.toLocaleDateString('en-IN', options);
}

// Generate Application ID
function generateAppId(type) {
  const prefix = type === 'workshop' ? 'RID-WS' : 'RID-TR';
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(1000 + Math.random() * 9000);
  return `${prefix}-${timestamp}-${random}`;
}

// ✅ 1. Apply for Workshop/Training Certificate
exports.applyCertificate = async (req, res) => {
  try {
    const { fullName, phone, certificateType, duration, durationUnit, email } = req.body;

    if (!fullName || !phone || !certificateType || !duration || !durationUnit || !email) {
      return res.status(400).json({ success: false, message: 'All fields are required' });
    }

    if (!['workshop', 'Participate'].includes(certificateType)) {
      return res.status(400).json({ success: false, message: 'Invalid certificate type' });
    }

    const appId = generateAppId(certificateType);

    const application = new WorkshopApplication({
      appId, fullName, phone, certificateType,
      duration: parseInt(duration), durationUnit, email, status: 'PENDING'
    });

    await application.save();

    try { await sendUserEmail(email, fullName, appId, certificateType); } catch (e) { console.error("User email error:", e); }
    try { await sendAdminEmail(appId, fullName, email, phone, certificateType, duration, durationUnit); } catch (e) { console.error("Admin email error:", e); }

    res.status(201).json({ success: true, appId, message: 'Application submitted successfully! Check your email for confirmation.' });

  } catch (error) {
    console.error('Apply Certificate Error:', error);
    res.status(500).json({ success: false, message: 'Server error. Please try again.', error: process.env.NODE_ENV === 'development' ? error.message : undefined });
  }
};

// ✅ 2. Verify Application Status
exports.verifyApplication = async (req, res) => {
  try {
    const { appId } = req.params;
    const application = await WorkshopApplication.findOne({ appId });

    if (!application) {
      return res.status(404).json({ success: false, message: 'Application not found' });
    }

    res.json({
      success: true,
      application: {
        appId: application.appId, fullName: application.fullName,
        phone: application.phone, certificateType: application.certificateType,
        duration: application.duration, durationUnit: application.durationUnit,
        email: application.email, status: application.status,
        createdAt: application.createdAt, verifiedAt: application.verifiedAt
      }
    });
  } catch (error) {
    console.error('Verify Application Error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

// ✅ 3. Admin Verify and Generate PDF
exports.adminVerify = async (req, res) => {
  try {
    const { appId } = req.params;
    const application = await WorkshopApplication.findOne({ appId });

    if (!application) {
      return res.status(404).send(`<html><body style="font-family:Arial;text-align:center;padding:50px;"><h2 style="color:#dc2626;">Application Not Found</h2><p>ID ${appId} does not exist.</p></body></html>`);
    }

    application.status = 'VERIFIED';
    application.verifiedAt = new Date();
    await application.save();

    const pdfBuffer = await generateCertificatePDF(application);

    try { await sendCertificateEmail(application, pdfBuffer); } catch (e) { console.error("Certificate email error:", e); }

    res.send(`
      <html>
        <head><style>
          body { font-family: Arial; text-align: center; padding: 50px; background: linear-gradient(135deg, #f5f7fa, #c3cfe2); }
          .container { background: white; padding: 40px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); max-width: 600px; margin: 0 auto; }
          .btn { display: inline-block; background: linear-gradient(to right, #2563eb, #1d4ed8); color: white; padding: 12px 25px; text-decoration: none; border-radius: 8px; margin: 15px 10px; font-weight: 600; }
        </style></head>
        <body>
          <div class="container">
            <h2 style="color:#16a34a;">Certificate Verified!</h2>
            <p><strong>Application ID:</strong> ${appId}</p>
            <p><strong>Applicant:</strong> ${application.fullName}</p>
            <p>Certificate sent to ${application.email}</p>
            <a href="/api/workshop/download/${appId}" class="btn">Download Certificate</a>
          </div>
        </body>
      </html>
    `);
  } catch (error) {
    console.error('Admin Verify Error:', error);
    res.status(500).send('<html><body style="text-align:center;padding:50px;"><h2>Server Error</h2></body></html>');
  }
};

// ✅ 4. Download Certificate
exports.downloadCertificate = async (req, res) => {
  try {
    const { appId } = req.params;
    const application = await WorkshopApplication.findOne({ appId });

    if (!application) return res.status(404).send('Certificate not found');

    if (application.status !== 'VERIFIED') {
      return res.status(403).send(`<html><body style="text-align:center;padding:50px;"><h2>Not Verified Yet</h2><p>Status: ${application.status}</p></body></html>`);
    }

    let filePath = application.certificatePath;

    if (!filePath || !fs.existsSync(filePath)) {
      filePath = await generateCertificatePDF(application);
      application.certificatePath = filePath;
      await application.save();
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `attachment; filename="RID_${application.certificateType}_${appId}.pdf"`);
    fs.createReadStream(filePath).pipe(res);

  } catch (error) {
    console.error('Download Certificate Error:', error);
    res.status(500).send('Error downloading certificate');
  }
};

// ✅ POLISHED generateCertificatePDF — matches target design exactly
// A4 Landscape: W=841.89, H=595.28  |  Y=0 is TOP
async function generateCertificatePDF(application) {
  return new Promise((resolve, reject) => {
    try {
      const certsDir      = path.join(__dirname, '../certificates');
      if (!fs.existsSync(certsDir)) fs.mkdirSync(certsDir, { recursive: true });

      const filePath      = path.join(certsDir, `${application.appId}.pdf`);
      const rridLogoPath  = path.resolve(__dirname, '../assets/logoggg.png');
      const rridStampPath = path.resolve(__dirname, '../assets/RRIDMOHAR.png');

      const doc    = new PDFDocument({ size: 'A4', layout: 'landscape', margin: 0 });
      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);

      const W  = doc.page.width;   // 841.89
      const H  = doc.page.height;  // 595.28

      // ═══════════════════════════════════════════════
      //  1. WHITE BACKGROUND
      // ═══════════════════════════════════════════════
      doc.rect(0, 0, W, H).fill('#FFFFFF');

      // ═══════════════════════════════════════════════
      //  2. LEFT DARK NAVY PANEL
      //     Pentagon: top-left → top-right(185) →
      //               mid-right(125,H/2) → bot-right(185,H) → bot-left
      // ═══════════════════════════════════════════════
      const PANEL_TOP   = 185;   // panel width at top & bottom
      const PANEL_MID   = 125;   // panel width at vertical centre (narrowest)

      // Solid fill
      doc.save();
      doc.moveTo(0, 0)
         .lineTo(PANEL_TOP, 0)
         .lineTo(PANEL_MID, H / 2)
         .lineTo(PANEL_TOP, H)
         .lineTo(0, H)
         .closePath()
         .fill('#0B2545');
      doc.restore();

      // Subtle horizontal stripe texture — clipped to panel
      doc.save();
      doc.moveTo(0, 0)
         .lineTo(PANEL_TOP, 0)
         .lineTo(PANEL_MID, H / 2)
         .lineTo(PANEL_TOP, H)
         .lineTo(0, H)
         .closePath()
         .clip();
      doc.strokeColor('#0e2e5e').lineWidth(1);
      for (let sy = 0; sy < H; sy += 7) {
        doc.moveTo(0, sy).lineTo(PANEL_TOP + 10, sy).stroke();
      }
      doc.restore();

      // ═══════════════════════════════════════════════
      //  3. GREY DIAGONAL ACCENT STRIP
      //     Sits just to the right of the navy panel
      // ═══════════════════════════════════════════════
      doc.save();
      // Outer edge follows panel, inner edge is ~30px inside
      doc.moveTo(PANEL_TOP,      0)
         .lineTo(PANEL_TOP + 30, 0)
         .lineTo(PANEL_MID + 30, H / 2)
         .lineTo(PANEL_TOP + 30, H)
         .lineTo(PANEL_TOP,      H)
         .lineTo(PANEL_MID,      H / 2)
         .closePath()
         .fill('#CECEC6');
      doc.restore();

      // ═══════════════════════════════════════════════
      //  4. LOGO  (top of panel, centred in ~125px)
      // ═══════════════════════════════════════════════
      const logoSize = 72;
      const logoX    = (PANEL_MID - logoSize) / 2;   // centred in narrowest part
      const logoY    = 20;

      if (fs.existsSync(rridLogoPath)) {
        doc.image(rridLogoPath, logoX, logoY, { width: logoSize, height: logoSize });
      } else {
        // Fallback circle placeholder
        doc.circle(logoX + logoSize / 2, logoY + logoSize / 2, logoSize / 2)
           .fillAndStroke('#1a4a8a', '#C9A227');
        doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(22)
           .text('R', logoX + logoSize / 2 - 7, logoY + logoSize / 2 - 12, { lineBreak: false });
      }

     // RRID TECH (upar)
doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(13)
   .text('RRID TECH', 0, logoY + logoSize + 5, {
      width: PANEL_MID + 10,
      align: 'center'
   });

// PRIVATE LIMITED (niche)
doc.fillColor('#8AACCC').font('Helvetica').fontSize(6.5)
   .text('— PRIVATE LIMITED —', 0, logoY + logoSize + 22, {
      width: PANEL_MID + 10,
      align: 'center'
   });
      

      // ═══════════════════════════════════════════════
      //  5. GOLD MEDAL  (vertical centre of panel)
      // ═══════════════════════════════════════════════
      const mX = PANEL_MID / 2;       // ~62
      const mY = H * 0.62;            // slightly below centre
      const mR = 40;

      // Outer dark gold ring
      doc.circle(mX, mY, mR).fill('#A0720A');
      // Main gold disc
      doc.circle(mX, mY, mR - 3).fill('#C9A227');
      // Radial shine lines
      for (let i = 0; i < 20; i++) {
        const angle = (Math.PI * 2 / 20) * i;
        doc.moveTo(mX + (mR - 13) * Math.cos(angle), mY + (mR - 13) * Math.sin(angle))
           .lineTo(mX + (mR - 4)  * Math.cos(angle), mY + (mR - 4)  * Math.sin(angle))
           .strokeColor('#E8C050').lineWidth(0.7).stroke();
      }
      // Inner disc
      doc.circle(mX, mY, mR - 12).fill('#DAA520');
      // Star — draw as polygon (5-pointed), avoid Unicode
      const starR1 = 14, starR2 = 6, starPts = 5;
      doc.save();
      let starPath = null;
      for (let i = 0; i < starPts * 2; i++) {
        const r     = i % 2 === 0 ? starR1 : starR2;
        const angle = (Math.PI / starPts) * i - Math.PI / 2;
        const sx    = mX + r * Math.cos(angle);
        const sy    = mY + r * Math.sin(angle);
        if (i === 0) { doc.moveTo(sx, sy); } else { doc.lineTo(sx, sy); }
      }
      doc.closePath().fill('#FFFFFF');
      doc.restore();

      // ═══════════════════════════════════════════════
      //  6. TOP-RIGHT HEXAGON BADGE
      // ═══════════════════════════════════════════════
      const hx = W - 45, hy = 45, hr = 32;
      doc.save();
      const hexPts = Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 6;
        return [hx + hr * Math.cos(a), hy + hr * Math.sin(a)];
      });
      doc.moveTo(...hexPts[0]);
      hexPts.slice(1).forEach(p => doc.lineTo(...p));
      doc.closePath().fill('#0B2545');
      // Inner ring
      doc.circle(hx, hy, hr - 9).fill('#123264');
      doc.fillColor('#FFFFFF').font('Helvetica-Bold').fontSize(16)
         .text('R', hx - 5, hy - 10, { lineBreak: false });
      doc.restore();

      // ═══════════════════════════════════════════════
      //  7. CONTENT AREA
      // ═══════════════════════════════════════════════
      const cL  = PANEL_TOP + 35;           // content left edge ~220
      const cW  = W - cL - 25;              // content width
      const cCX = cL + cW / 2;              // content centre X

      // Gold diamond accent (top-centre)
      const dX = cCX, dY = 36, dS = 11;
      doc.save();
      doc.moveTo(dX, dY - dS)
         .lineTo(dX + dS * 0.65, dY)
         .lineTo(dX, dY + dS)
         .lineTo(dX - dS * 0.65, dY)
         .closePath()
         .fill('#C9A227');
      doc.restore();

      // ── CERTIFICATE (big title) ────────────────────
      const subtitle = application.certificateType === 'workshop'
        ? 'OF COMPLETION' : 'OF PARTICIPATION';

      doc.fillColor('#0B2545').font('Helvetica-Bold').fontSize(48)
         .text('CERTIFICATE', cL, 52, { width: cW, align: 'center', characterSpacing: 1 });

      doc.fillColor('#888888').font('Helvetica').fontSize(15)
         .text(subtitle, cL, 106, { width: cW, align: 'center', characterSpacing: 3 });

      // Thin divider
      doc.moveTo(cL + 20, 130).lineTo(cL + cW - 20, 130)
         .strokeColor('#DDDDDD').lineWidth(0.8).stroke();

      // ── Proudly presented to ──────────────────────
      doc.fillColor('#666666').font('Helvetica').fontSize(11.5)
         .text('Proudly presented to :', cL, 142, { width: cW, align: 'center' });

      // ── RECIPIENT NAME ─────────────────────────────
      doc.fillColor('#111111').font('Helvetica-BoldOblique').fontSize(38)
         .text(application.fullName.toLowerCase(), cL, 162, { width: cW, align: 'center' });

      // Underline below name
      doc.moveTo(cCX - 200, 208).lineTo(cCX + 200, 208)
         .strokeColor('#BBBBBB').lineWidth(0.9).stroke();

      // ── BODY TEXT ──────────────────────────────────
      const programText = application.certificateType === 'workshop' ? 'Workshop' : 'Training Program';
      const dateText    = formatDate(new Date());

      doc.fillColor('#555555').font('Helvetica').fontSize(11)
         .text(`for participating in ${programText} on`, cL, 218, { width: cW, align: 'center' });

      doc.fillColor('#0B2545').font('Helvetica-Bold').fontSize(12)
         .text('Core Ecosystem & Emerging Technologies', cL, 235, { width: cW, align: 'center' });

      doc.fillColor('#555555').font('Helvetica').fontSize(11)
         .text(`held by RRID Tech Private Limited in the month of ${dateText}`, cL, 253, { width: cW, align: 'center' });

      doc.fillColor('#555555').font('Helvetica').fontSize(11)
         .text(`Duration: ${application.duration} ${application.durationUnit}`, cL, 270, { width: cW, align: 'center' });

      // ═══════════════════════════════════════════════
      //  8. SIGNATURES  (tight to bottom, Y ~430–490)
      // ═══════════════════════════════════════════════
      const sigY   = 430;                          // italic signature text starts here
      const lSigX  = cL + 10;                      // left sig block
      const rSigX  = cL + cW - 150;                // right sig block
      const sigW   = 140;

      // ── Left: Satish ──
      doc.fillColor('#1A1A1A').font('Helvetica-BoldOblique').fontSize(20)
         .text('Gautam ', lSigX, sigY, { width: sigW, align: 'center' });
      doc.moveTo(lSigX, sigY + 28).lineTo(lSigX + sigW, sigY + 28)
         .strokeColor('#BBBBBB').lineWidth(0.9).stroke();
      doc.fillColor('#111111').font('Helvetica-Bold').fontSize(10)
         .text('Mr.Gautam Kumar', lSigX, sigY + 33, { width: sigW, align: 'center' });
      doc.fillColor('#777777').font('Helvetica').fontSize(9.5)
         .text('Head Of Event', lSigX, sigY + 47, { width: sigW, align: 'center' });

      // ── Right: Ajay Katana ──
      doc.fillColor('#1A1A1A').font('Helvetica-BoldOblique').fontSize(20)
         .text('Sunil Kumar', rSigX, sigY, { width: sigW, align: 'center' });
      doc.moveTo(rSigX, sigY + 28).lineTo(rSigX + sigW, sigY + 28)
         .strokeColor('#BBBBBB').lineWidth(0.9).stroke();
      doc.fillColor('#111111').font('Helvetica-Bold').fontSize(10)
         .text('Er. Sunil Kumar', rSigX, sigY + 33, { width: sigW, align: 'center' });
      doc.fillColor('#777777').font('Helvetica').fontSize(9.5)
         .text('CEO', rSigX, sigY + 47, { width: sigW, align: 'center' });

      // ── Stamp (centre between sigs) ──
      const stampSize = 150;
      const stampX    = cCX - stampSize / 2;
      const stampY    = sigY - 30;
      if (fs.existsSync(rridStampPath)) {
        doc.image(rridStampPath, stampX, stampY, { width: stampSize, height: stampSize });
      }

      // ═══════════════════════════════════════════════
      //  9. FOOTER
      // ═══════════════════════════════════════════════
      doc.fillColor('#BBBBBB').font('Helvetica').fontSize(7.5)
         .text(
           `Verify at: https://ridtech.in/verify  |  Certificate ID: ${application.appId}  |  ridorg.in@gmail.com  |  +91 9202707903  |  Bhopal (MP)`,
           40, H - 18, { width: W - 80, align: 'center' }
         );

      doc.end();
      stream.on('finish', () => resolve(filePath));
      stream.on('error',   reject);

    } catch (err) {
      reject(err);
    }
  });
}

// ================= EMAIL FUNCTIONS =================

async function sendUserEmail(email, name, appId, type) {
  const mailOptions = {
    from: `"RID Bharat" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USERNAME}>`,
    to: email,
    subject: `Application Received - ${appId}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #16a34a;">Application Received Successfully!</h2>
        <p>Dear <strong>${name}</strong>,</p>
        <p>Thank you for applying for ${type} certificate at RID Bharat.</p>
        <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #166534;">Application Details:</h3>
          <p><strong>Application ID:</strong> ${appId}</p>
          <p><strong>Certificate Type:</strong> ${type.toUpperCase()}</p>
          <p><strong>Status:</strong> <span style="color: #d97706;">PENDING VERIFICATION</span></p>
        </div>
        <p>Your application is under review. You'll receive another email once verified.</p>
        <p><strong>Keep your Application ID safe for reference.</strong></p>
        <hr>
        <p style="color: #6b7280; font-size: 14px;">Best Regards,<br>RID Bharat Team</p>
      </div>
    `
  };
  return await transporter.sendMail(mailOptions);
}

async function sendAdminEmail(appId, name, email, phone, type, duration, unit) {
  const mailOptions = {
    from: `"RID Bharat" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USERNAME}>`,
    to: process.env.ADMIN_EMAIL || process.env.SMTP_USERNAME,
    subject: `New Application: ${appId}`,
    html: `
      <div style="font-family: Arial, sans-serif;">
        <h2 style="color: #dc2626;">New Application Received</h2>
        <div style="background: #fef2f2; padding: 15px; border-radius: 8px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Application ID:</strong> ${appId}</p>
          <p><strong>Type:</strong> ${type.toUpperCase()}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Duration:</strong> ${duration} ${unit}</p>
        </div>
        <div style="margin: 25px 0; text-align: center;">
          <a href="${process.env.BASE_URL || 'http://localhost:9191'}/api/workshop/verify-admin/${appId}" 
             style="background: #16a34a; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
            Click to Verify and Issue Certificate
          </a>
        </div>
      </div>
    `
  };
  return await transporter.sendMail(mailOptions);
}

async function sendCertificateEmail(application, pdfPath) {
  const mailOptions = {
    from: `"RID Bharat" <${process.env.SMTP_FROM_EMAIL || process.env.SMTP_USERNAME}>`,
    to: application.email,
    subject: `Certificate Ready - ${application.appId}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #16a34a;">Your Certificate is Ready!</h2>
        <p>Dear <strong>${application.fullName}</strong>,</p>
        <p>Congratulations! Your ${application.certificateType} certificate has been verified.</p>
        <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; margin: 20px 0; text-align: center;">
          <p><strong>Application ID:</strong> ${application.appId}</p>
          <p><strong>Certificate Type:</strong> ${application.certificateType.toUpperCase()}</p>
          <p><strong>Duration:</strong> ${application.duration} ${application.durationUnit}</p>
          <div style="margin: 25px 0;">
            <a href="${process.env.BASE_URL || 'http://localhost:9191'}/api/workshop/download/${application.appId}" 
               style="background: #16a34a; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; display: inline-block;">
              Download Certificate (PDF)
            </a>
          </div>
        </div>
        <hr>
        <p style="color: #6b7280; font-size: 14px;">Best Regards,<br>RID Bharat Team</p>
      </div>
    `
  };
  return await transporter.sendMail(mailOptions);
}