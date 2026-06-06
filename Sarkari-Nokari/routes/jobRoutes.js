const express = require("express");

const { verifyAdmin } = require("../middleware/auth");

const {
  addJob,
  getJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require("../controllers/jobController");

const router = express.Router();

router.post("/add-job", verifyAdmin, addJob);

router.get("/jobs", getJobs);

router.get("/job/:id", getJobById);

router.put("/job/:id", verifyAdmin, updateJob);

router.delete("/job/:id", verifyAdmin, deleteJob);

module.exports = router;