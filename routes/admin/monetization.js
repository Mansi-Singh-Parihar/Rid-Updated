const express = require("express");
const router = express.Router();

const MonetizationApplication = require("../../models/Monetization/Application");

// All Monetization Requests
router.get("/monetization-requests", async (req, res) => {
  try {
    const requests = await MonetizationApplication.find()
      .sort({ createdAt: -1 });

    res.json(requests);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Server Error"
    });
  }
});

// Approve
router.post("/approve-monetization/:id", async (req, res) => {
  try {

    await MonetizationApplication.findByIdAndUpdate(
      req.params.id,
      {
        status: "Approved",
        approvedAt: new Date()
      }
    );

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ success: false });
  }
});

// Reject
router.post("/reject-monetization/:id", async (req, res) => {
  try {

    await MonetizationApplication.findByIdAndUpdate(
      req.params.id,
      {
        status: "Rejected"
      }
    );

    res.json({ success: true });

  } catch (err) {
    res.status(500).json({ success: false });
  }
});

router.get(
  "/monetization-requests-page",
  (req, res) => {
    res.render(
      "Admin/monetizationRequest/Request"
    );
  }
);
module.exports = router;