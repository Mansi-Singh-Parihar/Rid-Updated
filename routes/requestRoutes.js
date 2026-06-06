const express = require("express");
const router = express.Router();
const multer = require("multer");
const QuestionRequest = require("../models/QuestionRequest");
const authenticateJWT = require("../middleware/authMiddleware");

const upload = multer({ dest: "uploads/" });

// 🔥 CREATE REQUEST
router.post(
  "/create",
  authenticateJWT,
  upload.single("file"),
  async (req, res) => {
    try {
      const newRequest = await QuestionRequest.create({
        teacherId: req.user.userId,
        fileUrl: req.file.path,
        requirement: req.body.requirement
      });

      res.json({ success: true, data: newRequest });
    } catch (err) {
      res.status(500).json({ message: "Error creating request" });
    }
  }
);

// 🔥 GET MY REQUESTS (Teacher)
router.get("/my-requests", authenticateJWT, async (req, res) => {
  try {
    const requests = await QuestionRequest.find({
      teacherId: req.user.userId
    });

    res.json(requests);
  } catch (err) {
    res.status(500).json({ message: "Error" });
  }
});



module.exports = router;