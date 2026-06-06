const Job = require("../models/job");

// ── Add Job ──────────────────────────────────────────────────────────────────
const addJob = async (req, res) => {
  try {
    const {
      title,
      organization,
      category,
      state,
      notificationDate,
      applyStartDate,
      lastDate,
      examDate,
      admitCardInfo,
      totalPosts,
      eligibility,
      ageMin,
      ageMax,
      feeGeneral,
      feeSCST,
      vacancyDetails,
      selectionProcess,
      applyLink,
      notificationLink,
      officialSite,
    } = req.body;

    if (!title || !organization || !category) {
      return res.status(400).json({
        error: "Title, Organization, and Category are required",
      });
    }

    // Build vacancy object
    const vd = vacancyDetails || {};
    const cleanVacancy = {};

    if (vd.UR && Number(vd.UR)) cleanVacancy.UR = Number(vd.UR);
    if (vd.OBC && Number(vd.OBC)) cleanVacancy.OBC = Number(vd.OBC);
    if (vd.EWS && Number(vd.EWS)) cleanVacancy.EWS = Number(vd.EWS);
    if (vd.SC && Number(vd.SC)) cleanVacancy.SC = Number(vd.SC);
    if (vd.ST && Number(vd.ST)) cleanVacancy.ST = Number(vd.ST);

    const job = new Job({
      title: title.trim(),
      organization: organization.trim(),
      category: category.trim(),
      state: state ? state.trim().toLowerCase() : "",

      notificationDate: notificationDate || null,
      applyStartDate: applyStartDate || null,
      lastDate: lastDate || null,

      examDate: examDate || "",
      admitCardInfo: admitCardInfo || "",

      totalPosts: totalPosts ? Number(totalPosts) : null,
      eligibility: eligibility || "",

      ageMin: ageMin ? Number(ageMin) : null,
      ageMax: ageMax ? Number(ageMax) : null,

      feeGeneral: feeGeneral ? Number(feeGeneral) : null,
      feeSCST: feeSCST ? Number(feeSCST) : null,

      vacancyDetails: cleanVacancy,

      selectionProcess: Array.isArray(selectionProcess)
        ? selectionProcess
        : [],

      applyLink: applyLink || "",
      notificationLink: notificationLink || "",
      officialSite: officialSite || "",
    });

    await job.save();

    res.status(201).json({
      message: "Job added successfully",
      job,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// ── Get All Jobs ──────────────────────────────────────────────────────────────
const getJobs = async (req, res) => {
  try {
    const { category, search, state } = req.query;

    const filter = {};

    if (category) filter.category = category;
    if (search) {
      filter.title = {
        $regex: search,
        $options: "i",
      };
    }

    const jobs = await Job.find(filter).sort({
      createdAt: -1,
    });

    res.json(jobs);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// ── Get Single Job ────────────────────────────────────────────────────────────
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);

    if (!job) {
      return res.status(404).json({
        error: "Job not found",
      });
    }

    res.json(job);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// ── Update Job ────────────────────────────────────────────────────────────────
const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );

    if (!job) {
      return res.status(404).json({
        error: "Job not found",
      });
    }

    res.json({
      message: "Job updated successfully",
      job,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// ── Delete Job ────────────────────────────────────────────────────────────────
const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);

    if (!job) {
      return res.status(404).json({
        error: "Job not found",
      });
    }

    res.json({
      message: "Job deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

module.exports = {
  addJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
};