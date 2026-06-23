const Franchise = require("../models/Franchise");

const transporter = require("../config/mail");

// console.log("Controller Loaded");


// ======================================
// REGISTER FRANCHISE
// ======================================
const registerFranchise = async (req, res) => {
  try {

    // console.log("BODY =", req.body);

    // Save Franchise
    const franchise = await Franchise.create({
      franchiseName: req.body.franchiseName,
      location: req.body.location,
      ownerName: req.body.ownerName,
      contact: req.body.contact,
      email: req.body.email,
      establishedYear: req.body.establishedYear,
      licenseType: req.body.licenseType,
      licenseCategory: req.body.licenseCategory,
      selectedCourses: req.body.selectedCourses,
      remarks: req.body.remarks,
      status: "pending"
    });

    console.log("Franchise Saved");

    // Approve Link
    const approveLink =
      `http://localhost:9191/computer/franchise/approve/${franchise._id}`;

    // =========================
    // USER MAIL
    // =========================
try { await transporter.sendMail({ from: process.env.SMTP_FROM_EMAIL, to: franchise.email, subject:
   "RID Tech Franchise Registration Received", html: ` <div style="font-family: Arial, sans-serif; padding: 20px;"> <h2 style="color: green;"> Registration Successful ✅ 
   
   </h2> <p>Hello <b>${franchise.ownerName}</b>,</p> <p> Your franchise registration request has been received successfully. 
   </p> <p>  Our team will review your application and get back to you within 24 hours. </p> <hr> <p> 
   <b> Franchise:</b> ${franchise.franchiseName} </p> <p> <b> Status:</b> Pending Approval </p> <br> <p> Best Regards,<br> <b>RIDTECH Team</b> </p> </div> ` });

      console.log("User mail sent");

    } catch (mailErr) {

      console.log("User Mail Error =", mailErr);

    }

    // =========================
    // ADMIN MAIL
    // =========================
    try {

      await transporter.sendMail({
        from: process.env.SMTP_FROM_EMAIL,
        to: process.env.ADMIN_EMAIL,
        subject: "New Franchise Registration",

        html: `
        <div style="font-family:Arial;padding:20px">

        <h2>New Franchise Registration</h2>

        <p>
        <b>Franchise Name :</b>
        ${franchise.franchiseName}
        </p>

        <p>
        <b>Owner Name :</b>
        ${franchise.ownerName}
        </p>

        <p>
        <b>Email :</b>
        ${franchise.email}
        </p>

        <p>
        <b>Contact :</b>
        ${franchise.contact}
        </p>

        <p>
        <b>Location :</b>
        ${franchise.location}
        </p>

        <p>
        <b>License Type :</b>
        ${franchise.licenseType}
        </p>

        <br>

        <a href="${approveLink}"
        style="
        background:green;
        color:white;
        padding:12px 20px;
        text-decoration:none;
        border-radius:5px;
        display:inline-block;
        ">
        APPROVE FRANCHISE
        </a>

        </div>
        `
      });

      console.log("Admin mail sent");

    } catch (mailErr) {

      console.log("Admin Mail Error =", mailErr);

    }

    return res.status(200).json({
      success: true,
      message: "Franchise Request Sent Successfully"
    });

  } catch (err) {

    console.log("REGISTER ERROR =", err);

    return res.status(500).json({
      success: false,
      message: err.message
    });

  }
};

// ======================================
// APPROVE FRANCHISE
// ======================================

const approveFranchise = async (req, res) => {
  try {
    const franchise = await Franchise.findById(req.params.id);

    if (!franchise) {
      return res.send("Franchise Not Found");
    }

    // Update Status
    franchise.status = "approved";

    await franchise.save();

    // ======================================
    // 3. APPROVED MAIL TO USER
    // ======================================
await transporter.sendMail({
  from: 'kumaranwnish@gmail.com',
  to: franchise.email,
  subject: " Franchise Approved",
  html: `
    <div style="font-family: Arial, sans-serif; padding:20px; max-width:600px;">
      <h2 style="color:green;">🎉 Congratulations!</h2>

      <p>Hello <b>${franchise.ownerName}</b>,</p>

      <p>Your franchise has been approved successfully.</p>

      <hr>

      <p><b> Franchise:</b> ${franchise.franchiseName}</p>

      <p><b>✅ Status:</b> Approved</p>

      <p>
        Welcome to the RIDTECH Family. We look forward to a successful partnership.
      </p>

      <br>

      <p>
        Best Regards,<br>
        <b>RIDTECH Team</b>
      </p>
    </div>
  `,
});

    res.send("Approved Successfully");
  } catch (err) {
    console.log(err);

    res.send("Server Error");
  }
};

module.exports = {
  registerFranchise,
  approveFranchise,
};
