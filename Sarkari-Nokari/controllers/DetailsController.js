const mongoose = require("mongoose");
const Job       = require("../models/job");
const Admit     = require("../models/admit");
const Result    = require("../models/result");
const ExamGuide = require("../models/examGuideNew");

function dateStatus(date, isString = false) {
  if (isString || !date) return "upcoming";
  const now  = new Date();
  const d    = new Date(date);
  const diff = d - now;
  if (diff < 0)                          return "done";
  if (diff <= 7 * 24 * 60 * 60 * 1000)  return "active";
  return "upcoming";
}

function toSlug(title = "") {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function slugToKeyword(slug = "") {
  return slug
    .replace(/-/g, " ")
    .trim();
}

function buildDates(doc, source) {
  const dates = [];
  const add = (event, date, isString = false) => {
    if (!date) return;
    dates.push({ event, date, isString, status: dateStatus(date, isString) });
  };

  if (source === "job") {
    add("Notification Released", doc.notificationDate);
    add("Application Start",     doc.applyStartDate);
    add("Last Date to Apply",    doc.lastDate);
    add("Exam Date",             doc.examDate,      true);
    add("Admit Card",            doc.admitCardInfo, true);
  }
  if (source === "admit") {
    add("Application Start",     doc.applyStartDate);
    add("Last Date to Apply",    doc.applyLastDate);
    add("Admit Card Released",   doc.releaseDate);
    add("Exam Date",             doc.examDate,      true);
    add("Reporting Time",        doc.reportingTime, true);
  }
  if (source === "result") {
    add("Exam Date",             doc.examDate,  true);
    add("Result Declared",       doc.resultDate);
  }

  return dates;
}

function normaliseStats(doc, source) {
  if (!doc) return null;

  const importantDates = buildDates(doc, source);

  const base = {
    _id: doc._id,
    title:        doc.title,
    organization: doc.organization,
    category:     doc.category,
    totalPosts:   doc.totalPosts,
    officialSite: doc.officialSite,
    isOfficial:   !!doc.officialSite,
    importantDates,
    source,
  };

  if (source === "job") {
    return {
      ...base,
      examDate:         doc.examDate,
      applyLastDate:    doc.lastDate,
      ageMin:           doc.ageMin,
      ageMax:           doc.ageMax,
      fee:              { general: doc.feeGeneral, scSt: doc.feeSCST },
      applyLink:        doc.applyLink,
      notificationLink: doc.notificationLink,
      downloadLink:     null,
    };
  }
  if (source === "admit") {
    return {
      ...base,
      examDate:         doc.examDate,
      applyLastDate:    doc.applyLastDate,
      ageMin:           doc.ageLimit?.min,
      ageMax:           doc.ageLimit?.max,
      fee:              { general: doc.fee?.general, scSt: doc.fee?.scSt },
      applyLink:        null,              
      notificationLink: null,
      downloadLink:     doc.downloadLink,
    };
  }
  if (source === "result") {
    return {
      ...base,
      examDate:         doc.examDate,
      applyLastDate:    null,

      applyLink:        null,
      downloadLink:     null,
      resultLink:       doc.resultLink,   
      meritListLink:    doc.meritListLink,
    };
  }

  return base;
}


exports.getExamDetail = async (req, res) => {
  try {
    const { source, slug } = req.params;

    // ── 1. rawDoc fetch ───────────────────────────────────
    let rawDoc = null;

    if (source === "job") {
      rawDoc = mongoose.Types.ObjectId.isValid(slug)
        ? await Job.findById(slug).lean()
        : await Job.findOne({ examGuideSlug: slug }).lean();

    } else if (source === "admit") {
      rawDoc = mongoose.Types.ObjectId.isValid(slug)
        ? await Admit.findById(slug).lean()
        : await Admit.findOne({ examGuideSlug: slug }).lean();

    } else if (source === "result") {
      rawDoc = mongoose.Types.ObjectId.isValid(slug)
        ? await Result.findById(slug).lean()
        : await Result.findOne({ examGuideSlug: slug }).lean();

    } else {
      return res.status(400).send("Invalid source type.");
    }

    // ── 2. ExamGuide fetch ────────────────────────────────
    let guide = null;

    if (rawDoc?.examGuideSlug) {
      guide = await ExamGuide.findOne({
        slug: rawDoc.examGuideSlug,
        isPublished: true,
      }).lean();
    }

    if (!guide && rawDoc?.category) {
      guide = await ExamGuide.findOne({
        category: rawDoc.category,
        isPublished: true,
        active: true,
      }).lean();
    }

    // ── 3. Render ─────────────────────────────────────────
    const stats = normaliseStats(rawDoc, source);
    res.render("examdetail", { guide, stats });

  } catch (err) {
    console.error("ExamDetail Error:", err);
    res.status(500).render("500");
  }
};