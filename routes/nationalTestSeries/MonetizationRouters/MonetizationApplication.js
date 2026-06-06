const express = require("express");
const router = express.Router();

const TeacherTest = require("../../../models/teacherTestModel");
const Teacher = require("../../../models/Teacher");
const User = require("../../../models/user");

const MonetizationApplication = require(
  "../../../models/Monetization/Application"
);

// Monetization Eligibility Check
router.get("/api/monetization/check", async (req, res) => {
  try {

    const userId = req.session?.userId;

    if (!userId) {
      return res.json({
        success: false,
        message: "❌ Please login first"
      });
    }

    let account =
      await User.findById(userId) ||
      await Teacher.findById(userId);

    if (!account) {
      return res.json({
        success: false,
        message: "❌ Account not found"
      });
    }

    const followers =
      account.followers?.length || 0;

    const tests = await TeacherTest.find({
      createdBy: userId
    });

    let highestViews = 0;

    tests.forEach(test => {
      highestViews = Math.max(
        highestViews,
        test.views || 0
      );
    });

    if (followers < 2) {
      return res.json({
        success: false,
        message:
          `❌ Monetization not available\n\nFollowers: ${followers}/2`
      });
    }

    if (highestViews < 2) {
      return res.json({
        success: false,
        message:
          `❌ Monetization not available\n\nHighest Views: ${highestViews}/2`
      });
    }

    return res.json({
      success: true
    });

  } catch (err) {

    console.log("MONETIZATION ERROR:", err);

    return res.json({
      success: false,
      message: "Server Error"
    });
  }
});

// Application Form
router.get("/monetization/apply", (req, res) => {
  res.render("NationalTestSeries/Monetization/apply");
});

// Submit Application
router.post("/monetization/apply", async (req, res) => {

  try {

    const application =
      await MonetizationApplication.create({
        ...req.body,
        ipAddress: req.ip,
        userAgent: req.headers["user-agent"]
      });

    res.status(201).json({
      success: true,
      message:
        "Monetization request submitted successfully",
      applicationId: application._id
    });

  } catch (error) {

    console.error(
      "APPLICATION ERROR:",
      error
    );

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
});
async function approveMonetization(id) {

  await fetch(
    "/admin/approve-monetization/" + id,
    {
      method: "POST"
    }
  );

  alert("Approved Successfully");

  showUserGroups();
}

async function rejectMonetization(id) {

  await fetch(
    "/admin/reject-monetization/" + id,
    {
      method: "POST"
    }
  );

  alert("Rejected Successfully");

  showUserGroups();
}
module.exports = router;