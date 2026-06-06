const express = require("express");

const { verifyAdmin } = require("../middleware/auth");

const Snapshot = require("../tracker/snapshot");
const { deepScrape } = require("../tracker/deepScraper");

const router = express.Router();

// ── GET /admin/tracker-updates ──
router.get("/tracker-updates", verifyAdmin, async (req, res) => {
  try {
    const [jobsSnaps, resultsSnaps, admitSnaps] = await Promise.all([
      Snapshot.find({ pageId: "latest_jobs" })
        .sort({ createdAt: -1 })
        .limit(10),

      Snapshot.find({ pageId: "results" })
        .sort({ createdAt: -1 })
        .limit(10),

      Snapshot.find({ pageId: "admit_card" })
        .sort({ createdAt: -1 })
        .limit(10),
    ]);

    // function mergeItems(snaps) {
    //   const seen = new Set();
    //   const merged = [];

    //   for (const snap of snaps) {
    //     for (const item of (snap.newItems || snap.items || [])) {
    //       if (!seen.has(item.id)) {
    //         seen.add(item.id);
    //         merged.push(item);
    //       }
    //     }
    //   }

    //   return merged;
    // }
    function mergeItems(snaps) {
  const seen = new Set();
  const merged = [];

  for (const snap of snaps) {
    const source = (snap.newItems && snap.newItems.length > 0)
      ? snap.newItems
      : (snap.items || []);  // ← falls back to full snapshot items

    for (const item of source) {
      if (!seen.has(item.id)) {
        seen.add(item.id);
        merged.push(item);
      }
    }
  }

  return merged;
}

    res.json({
      jobs: mergeItems(jobsSnaps),
      results: mergeItems(resultsSnaps),
      admitCards: mergeItems(admitSnaps),

      jobsUpdated: jobsSnaps[0]?.createdAt || null,
      resultsUpdated: resultsSnaps[0]?.createdAt || null,
      admitUpdated: admitSnaps[0]?.createdAt || null,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
});

// ── POST /admin/deep-scrape ──
// Body: { url: "...", type: "job" | "result" | "admit" }
router.post("/deep-scrape", verifyAdmin, async (req, res) => {
  const { url, type } = req.body;

  if (!url || !url.startsWith("http")) {
    return res.status(400).json({
      error: "Valid URL required",
    });
  }

  const pageType = ["job", "result", "admit"].includes(type)
    ? type
    : "job";

  try {
    console.log(
      `[DeepScrape] type=${pageType} url=${url}`
    );

    const data = await deepScrape(url, pageType);

    console.log(
      `[DeepScrape] Done: ${data.title}`
    );

    res.json({
      success: true,
      data,
    });
  } catch (err) {
    console.error(
      "[DeepScrape] Failed:",
      err.message
    );

    res.status(500).json({
      error: "Failed to scrape: " + err.message,
    });
  }
});

module.exports = router;