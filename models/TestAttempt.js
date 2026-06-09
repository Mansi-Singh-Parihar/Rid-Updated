const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema({
  testId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "TeacherTest"
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  },
  score: {
    type: Number,
    default: 0
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("TestAttempt", attemptSchema);