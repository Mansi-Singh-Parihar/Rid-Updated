const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USERNAME,
    pass: process.env.SMTP_PASSWORD
  }
});

transporter.verify(function (err) {

  if (err) {
    console.log("❌ Mail Error =", err);
  } else {
    console.log("✅ Mail Server Ready");
  }

});

module.exports = transporter;