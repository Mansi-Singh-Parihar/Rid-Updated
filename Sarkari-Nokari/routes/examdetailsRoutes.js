const express = require("express");
const router  = express.Router();
const { getExamDetail } = require("../controllers/DetailsController");

// ─────────────────────────────────────────────────────────────
// GET /exam/:source/:slug
//
// :source  →  "job" | "admit" | "result"
// :slug    →  title-based slug, e.g. "ssc-cgl-2025"
//
// Use this route from ANY listing page:
//
//   Job listing     →  /exam/job/ssc-cgl-2025
//   Admit listing   →  /exam/admit/upsc-cse-2025
//   Result listing  →  /exam/result/ibps-po-2025
// ─────────────────────────────────────────────────────────────
router.get("/:source/:slug", getExamDetail);

module.exports = router;