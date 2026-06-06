const ExamGuide = require("../models/examGuideNew");

// ─────────────────────────────────────────────────────────────
// Qualification hierarchy for comparison
// ─────────────────────────────────────────────────────────────
const QUAL_RANK = {
  "8th":              1,
  "10th":             2,
  "12th":             3,
  "Diploma":          3,
  "ITI":              3,
  "Graduation":       4,
  "Post Graduation":  5,
  "PhD":              6,
};

function userMeetsQual(userQual, requiredQuals = []) {
  if (!requiredQuals.length) return true;
  const userRank = QUAL_RANK[userQual] || 0;
  // User meets requirement if their rank >= ANY of the required quals
  return requiredQuals.some((q) => userRank >= (QUAL_RANK[q] || 0));
}

// ─────────────────────────────────────────────────────────────
// Age after relaxation
// ─────────────────────────────────────────────────────────────
function effectiveMaxAge(baseMax, category, relaxation = {}) {
  const map = {
    OBC:          relaxation.obc   || 3,
    SC:           relaxation.sc_st || 5,
    ST:           relaxation.sc_st || 5,
    EWS:          0,
    PwBD:         relaxation.pwd   || 10,
    "Ex-Servicemen": 5,
    General:      0,
  };
  return baseMax + (map[category] || 0);
}

// ─────────────────────────────────────────────────────────────
// GET /eligibility          → show form (fresh)
// ─────────────────────────────────────────────────────────────
exports.showForm = (req, res) => {
  res.render("eligibility/index", {
    results:        null,
    eligibleExams:  null,
    userInput:      null,
    totalCount:     0,
    recommendations: [],
    upcomingForms:  [],
    query:          req.query,
  });
};

// ─────────────────────────────────────────────────────────────
// POST /eligibility/check
// ─────────────────────────────────────────────────────────────
exports.checkEligibility = async (req, res) => {
  try {
    const { mode, dob, category, qualification, gender, state, interest } = req.body;

    // ── Validate DOB ──────────────────────────────────────
    if (!dob || !category) {
      return res.redirect(
        "/eligibility?error=" + encodeURIComponent("Date of Birth and Category are required.")
      );
    }

    const birthDate  = new Date(dob);
    const cutoff     = new Date("2026-08-01");   // age cut-off date
    const ageMs      = cutoff - birthDate;
    const age        = Math.floor(ageMs / (365.25 * 24 * 60 * 60 * 1000));

    if (age < 14 || age > 65) {
      return res.redirect(
        "/eligibility?error=" + encodeURIComponent("Please enter a valid date of birth.")
      );
    }

    const userInput = { dob, category, qualification, gender, state, interest, age };

    // ════════════════════════════════════════════════════════
    // QUICK CHECK
    // ════════════════════════════════════════════════════════
    if (mode === "quick") {
      // Fetch all active published guides
      const allGuides = await ExamGuide.find({ active: true, isPublished: true })
        .select("title category slug eligibility salaryRange")
        .lean();

      const results = allGuides.map((guide) => {
        const elig       = guide.eligibility || {};
        const baseMax    = elig.ageMax || 35;
        const effMax     = effectiveMaxAge(baseMax, category, elig.ageRelaxation);
        const ageOk      = age >= (elig.ageMin || 18) && age <= effMax;
        const qualOk     = userMeetsQual(qualification, elig.qualificationRequired);
        const catOk      =
          !elig.categoryEligibility?.length ||
          elig.categoryEligibility.includes("All") ||
          elig.categoryEligibility.includes(category);
        const eligible   = ageOk && qualOk && catOk;

        let reason = null;
        if (!ageOk)  reason = `Age ${age} not in ${elig.ageMin || 18}–${effMax} range`;
        if (!qualOk) reason = `${qualification} not sufficient`;
        if (!catOk)  reason = `Category ${category} not eligible`;

        return {
          name:          guide.title,
          slug:          guide.slug,
          category:      guide.category,
          qualification: (elig.qualificationRequired || []).join(" / ") || "Graduate",
          ageMin:        elig.ageMin || 18,
          ageMax:        effMax,
          eligible,
          reason,
        };
      });

      return res.render("eligibility/index", {
        results,
        eligibleExams:   null,
        userInput,
        totalCount:      results.filter((r) => r.eligible).length,
        recommendations: [],
        upcomingForms:   [],
        query:           {},
      });
    }

    // ════════════════════════════════════════════════════════
    // DEEP CHECK
    // ════════════════════════════════════════════════════════
    if (mode === "deep") {
      // Build query
      const dbQuery = { active: true, isPublished: true };

      if (interest && interest !== "All") {
        dbQuery.category = interest;
      }

      const allGuides = await ExamGuide.find(dbQuery)
        .select("title slug category overview eligibility salaryRange officialSite applyLink tags featured totalVacancies")
        .lean();

      const eligibleExams = [];

      allGuides.forEach((guide) => {
        const elig    = guide.eligibility || {};
        const baseMax = elig.ageMax || 35;
        const effMax  = effectiveMaxAge(baseMax, category, elig.ageRelaxation);

        const ageOk  = age >= (elig.ageMin || 18) && age <= effMax;
        const qualOk = userMeetsQual(qualification, elig.qualificationRequired);
        const catOk  =
          !elig.categoryEligibility?.length ||
          elig.categoryEligibility.includes("All") ||
          elig.categoryEligibility.includes(category);
        const genOk  =
          !elig.genderEligibility ||
          elig.genderEligibility === "All" ||
          !gender ||
          gender === "All" ||
          elig.genderEligibility === gender;
        const stateOk =
          !elig.stateEligibility?.length ||
          elig.stateEligibility.includes("All India") ||
          !state ||
          state === "All India" ||
          elig.stateEligibility.includes(state);

        if (ageOk && qualOk && catOk && genOk && stateOk) {
          // Shape matches what eligibility.ejs expects
          eligibleExams.push({
            _id:            guide._id,
            title:          guide.title,
            slug:           guide.slug,
            department:     guide.category,
            salaryRange:    guide.salaryRange || { min: 0, max: 0 },
            lastDate:       new Date(),          // placeholder — no lastDate in ExamGuide
            examLevel:      "Preliminary",
            admitCardDate:  null,
            officialWebsite: guide.officialSite || "#",
            featured:       guide.featured,
            totalVacancies: guide.totalVacancies,
          });
        }
      });

      // Featured first
      eligibleExams.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

      return res.render("eligibility/index", {
        results:         null,
        eligibleExams,
        userInput,
        totalCount:      eligibleExams.length,
        recommendations: [],
        upcomingForms:   [],
        query:           {},
      });
    }

    // Unknown mode fallback
    res.redirect("/eligibility");
  } catch (err) {
    console.error("Eligibility Check Error:", err);
    res.status(500).send("Server Error: " + err.message);
  }
};

// ─────────────────────────────────────────────────────────────
// GET /eligibility/exam/:id   →  redirect to /exam/job/:slug
// ─────────────────────────────────────────────────────────────
exports.getExamDetails = async (req, res) => {
  try {
    const exam = await ExamGuide.findById(req.params.id).lean();

    if (!exam) {
      return res.status(404).render("404", { message: "Exam not found." });
    }

    return res.redirect(`/exam/job/${exam.slug}`);
  } catch (err) {
    console.error("ExamDetails Redirect Error:", err);
    res.status(500).send("Server Error: " + err.message);
  }
};

// ─────────────────────────────────────────────────────────────
// GET /eligibility/api/upcoming
// Returns exams whose applicationStartDate is in the future
// ─────────────────────────────────────────────────────────────
exports.apiGetUpcoming = async (req, res) => {
  try {
    const now   = new Date();
    const limit = parseInt(req.query.limit) || 10;

    const exams = await ExamGuide.find({
      active:      true,
      isPublished: true,
    })
      .select("title slug category salaryRange totalVacancies officialSite featured")
      .sort({ featured: -1, createdAt: -1 })
      .limit(limit)
      .lean();

    res.json({ success: true, count: exams.length, data: exams });
  } catch (err) {
    console.error("apiGetUpcoming Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

// ─────────────────────────────────────────────────────────────
// GET /eligibility/api/active
// Returns all active + published guides
// ─────────────────────────────────────────────────────────────
exports.apiGetActive = async (req, res) => {
  try {
    const limit    = parseInt(req.query.limit)    || 20;
    const category = req.query.category || null;

    const query = { active: true, isPublished: true };
    if (category) query.category = category;

    const exams = await ExamGuide.find(query)
      .select("title slug category salaryRange totalVacancies officialSite featured tags")
      .sort({ featured: -1, createdAt: -1 })
      .limit(limit)
      .lean();

    res.json({ success: true, count: exams.length, data: exams });
  } catch (err) {
    console.error("apiGetActive Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};

// ─────────────────────────────────────────────────────────────
// GET /eligibility/api/search?q=ssc&category=SSC
// Search exams by title or tags
// ─────────────────────────────────────────────────────────────
exports.apiSearchExams = async (req, res) => {
  try {
    const { q, category } = req.query;

    if (!q || q.trim().length < 2) {
      return res.status(400).json({
        success: false,
        message: "Search query must be at least 2 characters.",
      });
    }

    const query = {
      active:      true,
      isPublished: true,
      $or: [
        { title:    { $regex: q, $options: "i" } },
        { tags:     { $regex: q, $options: "i" } },
        { overview: { $regex: q, $options: "i" } },
      ],
    };

    if (category && category !== "All") {
      query.category = category;
    }

    const exams = await ExamGuide.find(query)
      .select("title slug category salaryRange totalVacancies officialSite featured")
      .sort({ featured: -1 })
      .limit(15)
      .lean();

    res.json({ success: true, count: exams.length, data: exams });
  } catch (err) {
    console.error("apiSearchExams Error:", err);
    res.status(500).json({ success: false, message: err.message });
  }
};