const User = require("../models/user");
const bcrypt = require("bcryptjs");

const cookieParser = require("cookie-parser");

// const {jwtAuthMiddleware, generateToken} = require("../utils/jwt")
const jwt = require("jsonwebtoken");
const { sendEmail } = require("../utils/sendEmail");
const { storeOTP, validateOTP, findUserByEmail } = require("../utils/otpUtils");
// authController.js
exports.login = async (req, res) => {
  let { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ success: false, message: "Email is required" });
  }

  email = email.toLowerCase().trim();



  try {
    // 🔹 Check in all collections
    let user = await User.findOne({ email });

    if (!user) {
      const Teacher = require("../models/Teacher");
      user = await Teacher.findOne({ email });
    }

    if (!user) {
      const Organisation = require("../models/Organisation");
      user = await Organisation.findOne({ email });
    }

    // 🔹 User not found
    if (!user) {
      return res.send("Invalid email or password");
    }

    // 🔹 Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.send("Invalid email or password");
    }

    // 🔹 Generate token
    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET || "secret123",
      { expiresIn: "1h" }
    );

    // 🔹 Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // local development
      maxAge: 3600000,
    });
// 🔥 SESSION SAVE
req.session.userId = user._id;
req.session.userRole = user.role;
req.session.userEmail = user.email;

// 🔥 REDIRECT FIX
//const redirectUrl = req.session.redirectTo || "/rts/dashboard";
const redirectUrl = req.body.redirect || req.query.redirect;

// 🟢 STUDENT
if (user.role === "student") {
  return res.redirect(redirectUrl || "/rts/dashboard");
}

// 🟢 TEACHER 🔥
if (user.role === "teacher") {

  // agar redirect hai (like specific page)
  if (redirectUrl) {
    return res.redirect(redirectUrl);
  }

  // warna direct dashboard
  return res.redirect("/teacher-dashboard");
}

    if (user.role === "organisation") {

     if (user.organisationType === "Library") {
  return res.redirect("/library/dashboard");
}

      if (user.organisationType === "DCA") {
        return res.redirect("/computer");
      }

      if (user.organisationType === "Coaching Centre") {
        return res.redirect("/coaching-dashboard");
      }

      return res.redirect("/organisation");
    }

    if (user.role === "admin") {
      return res.redirect("/admin");
    }

    return res.send("Invalid role");

  } catch (error) {
    console.error("Login error:", error);
    res.status(500).send("Server error");
  }
};


exports.logout = (req, res) => {

    res.clearCookie("token");

    req.session.destroy((err) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                success: false
            });

        }

        res.clearCookie("connect.sid");

        res.set({
            "Cache-Control": "no-store, no-cache, must-revalidate, private",
            "Pragma": "no-cache",
            "Expires": "0"
        });

        return res.json({
            success: true
        });

    });

};
exports.verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await findUserByEmail(email);

    const isValidOTP = await validateOTP(email, otp);

    if (!isValidOTP) {
      return res.status(400).json({
        success: false,
        message: "Invalid or expired OTP",
      });
    }

    // 🔥 OTP clear karo
    user.otp = null;
    user.otpExpiry = null;
    await user.save();

    res.status(200).json({
      success: true,
      message: "OTP verified successfully",
    });

  } catch (error) {
    console.error("Error verifying OTP:", error);
    res.status(500).json({ success: false });
  }
};

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({
      success: false,
      error: "Email is required",
    });
  }

  try {
    const user = await findUserByEmail(email);

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "No account found with this email",
      });
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    await storeOTP(email, otp);

    const message = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body{
    margin:0;
    padding:0;
    background:#f4f7fb;
    font-family:Arial,sans-serif;
}

.wrapper{
    width:100%;
    padding:30px 0;
}

.container{
    max-width:650px;
    margin:auto;
    background:#ffffff;
    border-radius:16px;
    overflow:hidden;
    box-shadow:0 8px 30px rgba(0,0,0,0.08);
}

.header{
    background:linear-gradient(135deg,#2563eb,#1d4ed8);
    color:#fff;
    text-align:center;
    padding:35px;
}

.header h1{
    margin:0;
    font-size:32px;
}

.header p{
    margin-top:10px;
    opacity:.9;
}

.content{
    padding:35px;
    color:#333;
    line-height:1.8;
}

.otp-box{
    margin:25px 0;
    padding:20px;
    text-align:center;
    background:#f8fafc;
    border:2px dashed #2563eb;
    border-radius:12px;
}

.otp{
    font-size:42px;
    font-weight:bold;
    letter-spacing:8px;
    color:#2563eb;
}

.alert{
    margin-top:20px;
    background:#fff8e1;
    border-left:5px solid #f59e0b;
    padding:15px;
    border-radius:8px;
}

.footer{
    text-align:center;
    background:#f8fafc;
    padding:25px;
    color:#666;
    font-size:13px;
}
</style>
</head>

<body>

<div class="wrapper">
  <div class="container">

    <div class="header">
      <h1>RRID Tech Private Limited</h1>
      <p>Password Reset Verification</p>
    </div>

    <div class="content">
      <h2>Hello,</h2>

      <p>
        We received a request to reset the password for your RRID Tech Private Limited account.
      </p>

      <p>
        Use the OTP below to continue:
      </p>

      <div class="otp-box">
        <div class="otp">${otp}</div>
      </div>

      <p>
        This OTP is valid for <strong>10 minutes</strong>.
      </p>

      <div class="alert">
        <strong>Security Notice:</strong><br>
        Never share this OTP with anyone.
        RRID Tech Private Limited will never ask for your OTP via call, email or message.
      </div>
    </div>

    <div class="footer">
      © ${new Date().getFullYear()} RRID Tech Private Limited. All Rights Reserved.
      <br>
      This is an automated email. Please do not reply.
    </div>

  </div>
</div>

</body>
</html>
`;

    await sendEmail(
      email,
      "RID Bharat Password Reset OTP",
      message
    );

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });

  } catch (error) {
    console.error("Error sending OTP:", error);

    return res.status(500).json({
      success: false,
      error: "Internal server error",
    });
  }
};
exports.resetPassword = async (req, res) => {
  const { email, newPassword } = req.body;

  try {
    let user = await User.findOne({ email });

    if (!user) {
      const Teacher = require("../models/Teacher");
      user = await Teacher.findOne({ email });
    }

    if (!user) {
      const Organisation = require("../models/Organisation");
      user = await Organisation.findOne({ email });
    }

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);
    user.password = hashedPassword;
    await user.save();

    res.json({ success: true, message: "Password reset successful" });

  } catch (error) {
    console.error("Reset error:", error);
    res.status(500).json({ success: false });
  }
};
exports.logout = (req, res) => {
    res.clearCookie("token"); // agar JWT use kar raha hai
    req.session?.destroy?.(); // agar session use ho raha hai

    return res.redirect("/login");
};