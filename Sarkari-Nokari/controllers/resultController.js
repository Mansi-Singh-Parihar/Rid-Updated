// controllers/resultController.js

const Result = require("../models/result");

// ── Add Result ───────────────────────────────────────────────────────────────
const addResult = async (req, res) => {
  try {
    const {
      title,
      organization,
      category,
      examDate,
      resultDate,
      resultType,
      totalPosts,
      selectionProcess,
      resultLink,
      officialSite,
      meritListLink,
      state,
    } = req.body;

    if (!title || !organization || !category || !resultLink) {
      return res.status(400).json({
        error:
          "title, organization, category, and resultLink are required",
      });
    }

    const result = new Result({
      title,
      organization,
      category,
      examDate,
      resultDate,
      resultType,
      totalPosts,
      selectionProcess,
      resultLink,
      officialSite,
      meritListLink,
      state,
    });

    await result.save();

    res.status(201).json({
      message: "Result added successfully",
      result,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// ── Get All Results ──────────────────────────────────────────────────────────
const getResults = async (req, res) => {
  try {
    const {
      category,
      organization,
      resultType,
      state,
    } = req.query;

    const filter = {};

    if (category) filter.category = category;
    if (organization) filter.organization = organization;
    if (resultType) filter.resultType = resultType;
    if (state) filter.state = state.toLowerCase();

    const results = await Result.find(filter).sort({
      createdAt: -1,
    });

    res.json(results);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// ── Get Single Result ────────────────────────────────────────────────────────
const getResultById = async (req, res) => {
  try {
    const result = await Result.findById(req.params.id);

    if (!result) {
      return res.status(404).json({
        error: "Result not found",
      });
    }

    res.json(result);
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// ── Update Result ────────────────────────────────────────────────────────────
const updateResult = async (req, res) => {
  try {
    const updated = await Result.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!updated) {
      return res.status(404).json({
        error: "Result not found",
      });
    }

    res.json({
      message: "Result updated successfully",
      result: updated,
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};

// ── Delete Result ────────────────────────────────────────────────────────────
const deleteResult = async (req, res) => {
  try {
    const deleted = await Result.findByIdAndDelete(
      req.params.id
    );

    if (!deleted) {
      return res.status(404).json({
        error: "Result not found",
      });
    }

    res.json({
      message: "Result deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err.message,
    });
  }
};


module.exports = {
  addResult,
  getResults,
  getResultById,
  updateResult,
  deleteResult,
};