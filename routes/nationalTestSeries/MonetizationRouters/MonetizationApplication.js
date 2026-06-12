const express = require("express");
const router = express.Router();

const TeacherTest = require("../../../models/teacherTestModel");
const Teacher = require("../../../models/Teacher");
const User = require("../../../models/user");

const MonetizationApplication = require(
  "../../../models/Monetization/Application"
);
router.get("/api/monetization-status", async (req, res) => {
  try {

    const userId = req.session?.userId;

    if (!userId) {
      return res.json({
        status: "Inactive"
      });
    }

    const user =
      await User.findById(userId) ||
      await Teacher.findById(userId);

    if (!user) {
      return res.json({
        status: "Inactive"
      });
    }

    const app = await MonetizationApplication.findOne({
      email: user.email
    });

    if (!app) {
      return res.json({
        status: "Inactive"
      });
    }

    return res.json({
      status: app.status
    });

  } catch (err) {

    console.log(err);

    return res.json({
      status: "Inactive"
    });

  }
});
router.post(
  "/admin/approve-monetization/:id",
  async (req, res) => {
    try {

      await MonetizationApplication.findByIdAndUpdate(
        req.params.id,
        {
          status: "Approved",
          approvedAt: new Date()
        }
      );

      res.json({
        success: true
      });

    } catch (err) {

      console.log(err);

      res.status(500).json({
        success: false
      });

    }
  }
);
router.post(
  "/admin/reject-monetization/:id",
  async (req, res) => {
    try {

      await MonetizationApplication.findByIdAndUpdate(
        req.params.id,
        {
          status: "Rejected"
        }
      );

      res.json({
        success: true
      });

    } catch (err) {

      res.status(500).json({
        success: false
      });

    }
  }
);

router.get(
  "/admin/approved-monetization",
  async (req, res) => {

    const data =
      await MonetizationApplication.find({
        status: "Approved"
      });

    res.json(data);

  }
);
router.get(
  "/admin/approved-monetization-page",
  async (req, res) => {

    const users =
      await MonetizationApplication.find({
        status: "Approved"
      });

    res.render(
      "Admin/monetizationRequest/monetizationSeccsfully",
      { users }
    );
  }
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

    if (followers < 500) {
      return res.json({
        success: false,
        message:
          `❌ Monetization not available\n\nFollowers: ${followers}/500`
      });
    }

    if (highestViews < 1000) {
      return res.json({
        success: false,
        message:
          `❌ Monetization not available\n\nHighest Views: ${highestViews}/1000`
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
router.get("/monetization-request-submitted", (req, res) => {
  res.render(
    "NationalTestSeries/Monetization/Monetization-request-submitted"
  );
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

    return res.render(
  "NationalTestSeries/Monetization/Monetization-request-submitted",
  {
    applicationId: application._id
  }
);

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