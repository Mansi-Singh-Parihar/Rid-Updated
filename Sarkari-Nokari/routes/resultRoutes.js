// routes/resultRoutes.js

const express = require("express");

const { verifyAdmin } = require("../middleware/auth");

const {
  addResult,
  getResults,
  getResultById,
  updateResult,
  deleteResult,
} = require("../controllers/resultController");

const router = express.Router();

// router.get("/results-page", getResultPage);

router.post("/add-result", verifyAdmin, addResult);

router.get("/results", getResults);

router.get("/result/:id", getResultById);

router.put("/result/:id", verifyAdmin, updateResult);

router.delete("/result/:id", verifyAdmin, deleteResult);

module.exports = router;