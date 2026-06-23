const express = require("express");
const router = express.Router();

const applicationRoutes = require("./applicationRoutes");
const courseRoutes = require("./courseRoutes");
const feeRoutes = require("./feeRoutes");
const franchiseRoutes = require("./franchiseRoutes");
const questionRoutes = require("./questionRoutes");
const studentRoutes = require("./studentRoutes");
const submissionRoutes = require("./submissionRoutes");
const testRoutes = require("./testRoutes");

// Routes
router.use("/api/application", applicationRoutes);
router.use("/api/courses", courseRoutes);
router.use("/fees", feeRoutes);
router.use("/franchise", franchiseRoutes);
router.use("/api/questions", questionRoutes);
router.use("/api/students", studentRoutes);
router.use("/api/submissions", submissionRoutes);
router.use("/api/tests", testRoutes);

module.exports = router;