// // const express = require("express");
// // const Admit = require("../models/admit");
// // const Job = require("../models/job");
// // const router = express.Router();

// // const CATEGORIES = ["All", "UPSC", "SSC", "Banking", "Railway", "Defence", "Teaching", "Police", "State PSC"];

// // /**
// //  * Safely parse a date value that might be a Date object, ISO string, or
// //  * a human-readable string like "Coming Soon" / "August 2025".
// //  * Returns { date: Date|null, raw: string } so the view can show the
// //  * original text when we cannot produce a real Date.
// //  */
// // function parseDate(val) {
// //   if (!val) return { date: null, raw: null };
// //   if (val instanceof Date && !isNaN(val)) return { date: val, raw: null };
// //   const str = String(val).trim();
// //   const d = new Date(str);
// //   if (!isNaN(d.getTime())) return { date: d, raw: null };
// //   return { date: null, raw: str }; // e.g. "Coming Soon"
// // }

// // /**
// //  * Pick the best date to group/sort by for a given item.
// //  * Priority: applyStartDate → notificationDate → releaseDate → examDate
// //  */
// // function bestDate(item) {
// //   const candidates = [
// //     item.applyStartDate,
// //     item.notificationDate,
// //     item.releaseDate,
// //   ];
// //   for (const c of candidates) {
// //     const { date } = parseDate(c);
// //     if (date) return date;
// //   }
// //   return null;
// // }

// // /**
// //  * Month key used for grouping: "June 2025", or "Date TBA".
// //  */
// // function monthKey(item) {
// //   const d = bestDate(item);
// //   if (!d) return "Date TBA";
// //   return d.toLocaleString("default", { month: "long", year: "numeric" });
// // }

// // /**
// //  * Sort key (ms timestamp) for ordering months chronologically.
// //  */
// // function sortKey(item) {
// //   const d = bestDate(item);
// //   return d ? d.getTime() : Infinity;
// // }

// // /**
// //  * Normalise both models into a common shape the view can render.
// //  */
// // function normaliseAdmit(doc) {
// //   return {
// //     _id: doc._id,
// //     type: "admit",
// //     title: doc.title,
// //     organization: doc.organization,
// //     category: doc.category || "General",
// //     state: doc.state,
// //     totalPosts: doc.totalPosts,
// //     eligibility: doc.eligibility,
// //     applyStartDate: doc.applyStartDate,
// //     applyLastDate: doc.applyLastDate,
// //     examDateRaw: doc.examDate,           // string field on Admit
// //     fee: doc.fee,
// //     note: doc.note,
// //     isOfficial: !!doc.downloadLink,
// //     applyLink: doc.applyLink,
// //     officialSite: doc.officialSite,
// //     slug: doc.examGuideSlug ||
// //       doc.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
// //     notificationDate: null,
// //     releaseDate: doc.releaseDate,
// //     _sortKey: sortKey(doc),
// //   };
// // }

// // function normaliseJob(doc) {
// //   return {
// //     _id: doc._id,
// //     type: "job",
// //     title: doc.title,
// //     organization: doc.organization,
// //     category: doc.category || "General",
// //     state: doc.state,
// //     totalPosts: doc.totalPosts,
// //     eligibility: doc.eligibility,
// //     applyStartDate: doc.applyStartDate,
// //     applyLastDate: doc.lastDate,
// //     examDateRaw: doc.examDate,           // string field on Job too
// //     fee: doc.feeGeneral != null
// //       ? { general: String(doc.feeGeneral), scSt: String(doc.feeSCST ?? 0) }
// //       : null,
// //     note: doc.admitCardInfo || null,
// //     isOfficial: !!doc.notificationLink,
// //     applyLink: doc.applyLink,
// //     officialSite: doc.officialSite,
// //     slug: doc.examGuideSlug ||
// //       (doc.title || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
// //     notificationDate: doc.notificationDate,
// //     releaseDate: null,
// //     _sortKey: sortKey(doc),
// //   };
// // }

// // // GET /examcalendar
// // router.get("/", async (req, res) => {
// //   try {
// //     const { category, type } = req.query;

// //     const filter = {};
// //     if (category && category !== "All") {
// //       filter.category = category;
// //     }

// //     // Fetch from both collections (honour optional ?type= filter)
// //     const [admitDocs, jobDocs] = await Promise.all([
// //       (type === "job")  ? [] : Admit.find(filter).lean(),
// //       (type === "admit") ? [] : Job.find(filter).lean(),
// //     ]);

// //     const items = [
// //       ...admitDocs.map(normaliseAdmit),
// //       ...jobDocs.map(normaliseJob),
// //     ].sort((a, b) => a._sortKey - b._sortKey);

// //     // Group by month
// //     const grouped = {};
// //     items.forEach((item) => {
// //       const key = monthKey(item);
// //       if (!grouped[key]) grouped[key] = [];
// //       grouped[key].push(item);
// //     });

// //     // Sort months chronologically (Date TBA goes last)
// //     const sortedGrouped = Object.fromEntries(
// //       Object.entries(grouped).sort(([a], [b]) => {
// //         if (a === "Date TBA") return 1;
// //         if (b === "Date TBA") return -1;
// //         return new Date(a) - new Date(b);
// //       })
// //     );

// //     // Category counts across both collections
// //     const [allAdmits, allJobs] = await Promise.all([
// //       Admit.find({}).lean(),
// //       Job.find({}).lean(),
// //     ]);

// //     const categoryCounts = {};
// //     [...allAdmits, ...allJobs].forEach((e) => {
// //       if (e.category) {
// //         categoryCounts[e.category] = (categoryCounts[e.category] || 0) + 1;
// //       }
// //     });

// //     res.render("examcalendar", {
// //       grouped: sortedGrouped,
// //       categoryCounts,
// //       activeCategory: category || "All",
// //       activeType: type || "all",
// //       totalCount: allAdmits.length + allJobs.length,
// //       parseDate,   // pass helper so EJS can use it
// //     });
// //   } catch (err) {
// //     console.error(err);
// //     res.status(500).send("Server Error: " + err.message);
// //   }
// // });

// // module.exports = router;


// const express = require("express");
// const Admit = require("../models/admit");
// const Job = require("../models/job");
// const router = express.Router();

// /** Try to parse any date value — Date object, ISO string, or free text like "Coming Soon" */
// function toDate(val) {
//   if (!val) return null;
//   if (val instanceof Date && !isNaN(val)) return val;
//   const d = new Date(String(val));
//   return isNaN(d.getTime()) ? null : d;
// }

// /** Best date to group/sort by: applyStartDate → notificationDate → releaseDate */
// function bestDate(item) {
//   for (const f of ["applyStartDate", "notificationDate", "releaseDate"]) {
//     const d = toDate(item[f]);
//     if (d) return d;
//   }
//   return null;
// }

// function monthKey(item) {
//   const d = bestDate(item);
//   return d ? d.toLocaleString("default", { month: "long", year: "numeric" }) : "Date TBA";
// }

// /** Normalise Admit doc → common shape */
// function fromAdmit(doc) {
//   return {
//     title: doc.title,
//     organization: doc.organization,
//     category: doc.category || "",
//     applyStartDate: doc.applyStartDate,
//     applyLastDate: doc.applyLastDate,
//     examDate: doc.examDate || null,
//     totalPosts: doc.totalPosts || null,
//     isOfficial: !!doc.downloadLink || !!doc.applyLink,
//     applyLink: doc.applyLink || doc.officialSite || null,
//     slug: doc.examGuideSlug ||
//       doc.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
//     note: doc.note || null,
//     _sortVal: (bestDate(doc) || new Date("9999")).getTime(),
//   };
// }

// /** Normalise Job doc → common shape */
// function fromJob(doc) {
//   return {
//     title: doc.title || "",
//     organization: doc.organization || "",
//     category: doc.category || "",
//     applyStartDate: doc.applyStartDate,
//     applyLastDate: doc.lastDate,
//     examDate: doc.examDate || null,
//     totalPosts: doc.totalPosts || null,
//     isOfficial: !!doc.notificationLink || !!doc.applyLink,
//     applyLink: doc.applyLink || doc.officialSite || null,
//     slug: doc.examGuideSlug ||
//       (doc.title || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, ""),
//     note: null,
//     _sortVal: (bestDate(doc) || new Date("9999")).getTime(),
//   };
// }

// router.get("/", async (req, res) => {
//   try {
//     const { category } = req.query;
//     const filter = category && category !== "All" ? { category } : {};

//     const [admitDocs, jobDocs, allAdmits, allJobs] = await Promise.all([
//       Admit.find(filter).lean(),
//       Job.find(filter).lean(),
//       Admit.find({}).lean(),
//       Job.find({}).lean(),
//     ]);

//     const items = [
//       ...admitDocs.map(fromAdmit),
//       ...jobDocs.map(fromJob),
//     ].sort((a, b) => a._sortVal - b._sortVal);

//     // Group by month
//     const groupMap = {};
//     items.forEach((item) => {
//       const key = monthKey(item);
//       (groupMap[key] = groupMap[key] || []).push(item);
//     });

//     // Sort months chronologically, Date TBA last
//     const grouped = Object.fromEntries(
//       Object.entries(groupMap).sort(([a], [b]) => {
//         if (a === "Date TBA") return 1;
//         if (b === "Date TBA") return -1;
//         return new Date(a) - new Date(b);
//       })
//     );

//     // Category counts
//     const categoryCounts = {};
//     [...allAdmits, ...allJobs].forEach((e) => {
//       if (e.category) categoryCounts[e.category] = (categoryCounts[e.category] || 0) + 1;
//     });

//     res.render("examcalendar", {
//       grouped,
//       categoryCounts,
//       activeCategory: category || "All",
//       totalCount: allAdmits.length + allJobs.length,
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).send("Server Error: " + err.message);
//   }
// });

// module.exports = router;
const express = require("express");
const Admit = require("../models/admit");
const Job = require("../models/job");
const router = express.Router();

function toDate(val) {
  if (!val) return null;
  if (val instanceof Date && !isNaN(val)) return val;
  const d = new Date(String(val));
  return isNaN(d.getTime()) ? null : d;
}

function bestDate(item) {
  for (const f of ["applyStartDate", "notificationDate", "releaseDate"]) {
    const d = toDate(item[f]);
    if (d) return d;
  }
  return null;
}

function monthKey(item) {
  const d = bestDate(item);
  return d ? d.toLocaleString("default", { month: "long", year: "numeric" }) : "Date TBA";
}

function normaliseItem(doc, type) {
  return {
    _id: doc._id,
    type: type,
    title: doc.title,
    organization: doc.organization,
    category: doc.category || "General",
    applyStartDate: doc.applyStartDate,
    applyLastDate: type === 'job' ? doc.lastDate : doc.applyLastDate,
    examDateRaw: doc.examDate,
    totalPosts: doc.totalPosts,
    eligibility: doc.eligibility,
    note: doc.note || (type === 'job' ? doc.admitCardInfo : null),
    isOfficial: !!(doc.downloadLink || doc.applyLink || doc.notificationLink),
    applyLink: doc.applyLink,
    officialSite: doc.officialSite,
    slug: doc.examGuideSlug || doc.title.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    _sortVal: (bestDate(doc) || new Date("9999")).getTime(),
  };
}

router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const filter = category && category !== "All" ? { category } : {};

    const [admitDocs, jobDocs, allAdmits, allJobs] = await Promise.all([
      Admit.find(filter).lean(),
      Job.find(filter).lean(),
      Admit.find({}).lean(),
      Job.find({}).lean(),
    ]);

    const items = [
      ...admitDocs.map(d => normaliseItem(d, 'admit')),
      ...jobDocs.map(d => normaliseItem(d, 'job')),
    ].sort((a, b) => a._sortVal - b._sortVal);

    // GROUP BY MONTH - IMPORTANT PART
    const grouped = {};
    items.forEach(item => {
      const key = monthKey(item);
      if (!grouped[key]) grouped[key] = [];
      grouped[key].push(item);
    });

    // Sort months chronologically
    const sortedGrouped = {};
    Object.keys(grouped).sort((a, b) => {
      if (a === "Date TBA") return 1;
      if (b === "Date TBA") return -1;
      return new Date(a) - new Date(b);
    }).forEach(key => {
      sortedGrouped[key] = grouped[key];
    });

    // Category counts
    const categoryCounts = {};
    [...allAdmits, ...allJobs].forEach(e => {
      if (e.category) categoryCounts[e.category] = (categoryCounts[e.category] || 0) + 1;
    });

    // RENDER WITH ALL REQUIRED DATA
    res.render("examcalendar", {
      grouped: sortedGrouped,        // ✅ IMPORTANT
      categoryCounts: categoryCounts,
      activeCategory: category || "All",
      totalCount: allAdmits.length + allJobs.length,
    });
  } catch (err) {
    console.error("Calendar route error:", err);
    res.status(500).send("Server Error: " + err.message);
  }
});

module.exports = router;