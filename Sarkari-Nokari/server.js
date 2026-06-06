const path = require("path");
const express = require("express");

const router = express.Router();

// Routes
const eligibilityRoutes = require("./routes/eligibilityRoutes");
const adminRoutes = require("./routes/adminRoutes");
const jobRoutes = require("./routes/jobRoutes");
const admitRoutes = require("./routes/admitRoutes");
const resultRoutes = require("./routes/resultRoutes");
const trackerRoutes = require("./routes/trackerRoutes");
const ExamcalendarRoutes = require("./routes/examcalendarRoutes");
const examdetailsRoutes = require("./routes/examdetailsRoutes");

// Models
const Job = require("./models/job");
const Admit = require("./models/admit");
const Result = require("./models/result");

// =============================================
// MIDDLEWARE
// =============================================
router.use(express.json());

router.use((req, res, next) => {
  res.set("Cache-Control", "no-store");
  next();
});

router.use(express.urlencoded({ extended: true }));

// Static files
router.use(
  "/public",
  express.static(path.join(__dirname, "public"))
);

// =============================================
// ROUTES
// =============================================
router.use("/admin", adminRoutes);
router.use("/admin", jobRoutes);
router.use("/admin", admitRoutes);
router.use("/admin", resultRoutes);
router.use("/admin", trackerRoutes);

router.use("/eligibility", eligibilityRoutes);
router.use("/examcalendar", ExamcalendarRoutes);
router.use("/exam", examdetailsRoutes);

// =============================================
// CAREER GUIDANCE
// =============================================
router.get("/careerguidance", (req, res) => {
  res.render("careerguidance");
});

// =============================================
// HOME
// =============================================
router.get("/", async (req, res) => {
  try {
    const [jobs, allJobs, admits, results] = await Promise.all([
      Job.find().sort({ createdAt: -1 }).limit(10),
      Job.find().select("state totalPosts"),
      Admit.find().sort({ createdAt: -1 }).limit(10),
      Result.find().sort({ createdAt: -1 }).limit(10),
    ]);

    const totalVacancies = allJobs.reduce(
      (sum, job) => sum + (job.totalPosts || 0),
      0
    );

    res.render("home", {
      jobs,
      allJobs,
      admits,
      results,
      totalVacancies,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// =============================================
// JOBS
// =============================================
router.get("/jobs", async (req, res) => {
  try {
    const filter = {};

    if (req.query.state) {
      filter.state = req.query.state.toLowerCase();
    }

    const jobs = await Job.find(filter).sort({ createdAt: -1 });

    res.render("jobs", { jobs });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// =============================================
// ADMIT
// =============================================
router.get("/admit", async (req, res) => {
  try {
    const filter = {};

    if (req.query.state) {
      filter.state = req.query.state.toLowerCase();
    }

    const admits = await Admit.find(filter).sort({ createdAt: -1 });

    res.render("admit", { admits });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});

// =============================================
// RESULT
// =============================================
router.get("/result", async (req, res) => {
  try {
    const filter = {};

    if (req.query.state) {
      filter.state = req.query.state.toLowerCase();
    }

    const results = await Result.find(filter).sort({ createdAt: -1 });

    res.render("result-sarkari", { results });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
});



// =============================================
// SEARCH
// =============================================
router.get("/search", async (req, res) => {
  const query = req.query.q;

  if (!query || query.trim().length < 2) {
    return res.render("search", {
      jobs: [],
      admits: [],
      results: [],
      query: "",
    });
  }

  const safe = query.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

  try {
    const [jobs, admits, results] = await Promise.all([
      Job.find({ title: { $regex: safe, $options: "i" } }),
      Admit.find({ title: { $regex: safe, $options: "i" } }),
      Result.find({ title: { $regex: safe, $options: "i" } }),
    ]);

    res.render("search", {
      jobs,
      admits,
      results,
      query,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send("Search Error");
  }
});

// =============================================
// SEARCH API
// =============================================
router.get("/api/suggestions", async (req, res) => {
  try {
    const q = req.query.q;

    if (!q) return res.json([]);

    const regex = {
      $regex: q,
      $options: "i",
    };

    const [jobs, admits, results] = await Promise.all([
      Job.find({ title: regex }).select("_id title").limit(5),
      Admit.find({ title: regex }).select("_id title").limit(5),
      Result.find({ title: regex }).select("_id title").limit(5),
    ]);

    res.json([
      ...jobs,
      ...admits,
      ...results,
    ]);
  } catch (err) {
    console.error(err);
    res.json([]);
  }
});

module.exports = router;