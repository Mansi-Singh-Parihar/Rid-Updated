const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { verifyAdmin } = require("../middleware/auth");
const dotenv = require("dotenv");

dotenv.config();

const Job = require("../models/job");
const Admit = require("../models/admit");
const Result = require("../models/result");
const Exam = require("../models/exam");
const ExamGuide = require("../models/examGuideNew"); 
const Admin = require("../models/Admin");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("admin");
});
router.get("/create-account-Sarkarinaukari", async (req, res) => {
  try {
    const email = "asangam012@gmail.com";
    const password = "Anil@123";

    let admin = await Admin.findOne({ email });

    if (admin) {
      return res.json({
        message: "Admin already exists",
        email
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    admin = await Admin.create({
      email,
      password: hashedPassword
    });

    res.json({
      message: "Admin created successfully",
      email
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
});
// ─────────────────────────────────────────
//  AUTH
// ─────────────────────────────────────────
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   if (email !== admin.email)
//     return res.status(400).json({ message: "Invalid email" });

//   const isMatch = await bcrypt.compare(password, admin.password);
//   if (!isMatch)
//     return res.status(400).json({ message: "Wrong password" });

//   const token = jwt.sign(
//     { role: "admin" },
//     process.env.JWT_SECRET,
//     { expiresIn: "1d" }
//   );
//   res.json({ token });
// });

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const admin = await Admin.findOne({
      email: email.toLowerCase()
    });

    if (!admin) {
      return res.status(400).json({
        message: "Invalid email"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      admin.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Wrong password"
      });
    }

    const token = jwt.sign(
      {
        adminId: admin._id,
        role: "admin"
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d"
      }
    );

    res.json({
      token,
      admin: {
        id: admin._id,
        email: admin.email
      }
    });

  } catch (err) {
    res.status(500).json({
      error: err.message
    });
  }
}); 
// ─────────────────────────────────────────
//  CHECK EXISTS  (used by Live Scrape Feed)

// ─────────────────────────────────────────
router.get("/check-exists", verifyAdmin, async (req, res) => {
  try {
    const { title, type } = req.query;
    if (!title || !type) return res.json({ exists: false });

    const modelMap = { job: Job, admit: Admit, result: Result };
    const Model = modelMap[type];
    if (!Model) return res.json({ exists: false });

    const safeTitle = title.trim()
      .slice(0, 60)
      .replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

    const doc = await Model.findOne({
      title: { $regex: safeTitle, $options: "i" }
    }).lean();

    res.json({ exists: !!doc, matchedTitle: doc?.title || null });
  } catch (err) {
    res.status(500).json({ exists: false, error: err.message });
  }
});



router.get("/exams", verifyAdmin, async (req, res) => {
  try {
    const exams = await Exam.find().sort({ createdAt: -1 }).lean();
    res.json(exams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/add-exam", verifyAdmin, async (req, res) => {
  try {
    const exam = await Exam.create(req.body);
    res.status(201).json({ message: "Exam published!", data: exam });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/exam/:id", verifyAdmin, async (req, res) => {
  try {
    const doc = await Exam.findById(req.params.id).lean();
    if (!doc) return res.status(404).json({ error: "Exam not found" });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.put("/exam/:id", verifyAdmin, async (req, res) => {
  try {
    const doc = await Exam.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { returnDocument: 'after', runValidators: true }
    );
    if (!doc) return res.status(404).json({ error: "Exam not found" });
    res.json({ message: "Exam updated successfully", data: doc });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/exam/:id", verifyAdmin, async (req, res) => {
  try {
    const doc = await Exam.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "Exam not found" });
    res.json({ message: "Exam deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ═══════════════════════════════════════════════════════════
//  EXAMGUIDE ROUTES  —  add these to your admin router file
//  (paste after your existing exam routes)
// ═══════════════════════════════════════════════════════════



// GET all exam guides
router.get("/examguides", verifyAdmin, async (req, res) => {
  try {
    const guides = await ExamGuide.find()
      .sort({ createdAt: -1 })
      .select("_id slug title category examType totalVacancies active isPublished createdAt")
      .lean();
    res.json(guides);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET single exam guide
router.get("/examguide/:id", verifyAdmin, async (req, res) => {
  try {
    const doc = await ExamGuide.findById(req.params.id).lean();
    if (!doc) return res.status(404).json({ error: "ExamGuide not found" });
    res.json(doc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST create exam guide
router.post("/add-examguide", verifyAdmin, async (req, res) => {
  try {
    const guide = await ExamGuide.create(req.body);
    res.status(201).json({ message: "Exam Guide published!", data: guide });
  } catch (err) {
    // Mongoose validation / duplicate slug errors
    if (err.code === 11000) {
      return res.status(409).json({ error: "Slug already exists. Use a unique slug." });
    }
    res.status(500).json({ error: err.message });
  }
});

// PUT update exam guide
router.put("/examguide/:id", verifyAdmin, async (req, res) => {
  try {
    const doc = await ExamGuide.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true, runValidators: true }
    );
    if (!doc) return res.status(404).json({ error: "ExamGuide not found" });
    res.json({ message: "Exam Guide updated successfully", data: doc });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// DELETE exam guide
router.delete("/examguide/:id", verifyAdmin, async (req, res) => {
  try {
    const doc = await ExamGuide.findByIdAndDelete(req.params.id);
    if (!doc) return res.status(404).json({ error: "ExamGuide not found" });
    res.json({ message: "Exam Guide deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/add-examguide-bulk", verifyAdmin, async (req, res) => {
  try {
    const { items } = req.body;
    if (!Array.isArray(items) || !items.length) {
      return res.status(400).json({ error: "items array required" });
    }

    let inserted = 0;
    const errors = [];

    for (const item of items) {
      try {
        await ExamGuide.create(item);
        inserted++;
      } catch (err) {
        errors.push({ slug: item.slug, error: err.message });
      }
    }

    res.json({
      inserted,
      failed: errors.length,
      errors,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;