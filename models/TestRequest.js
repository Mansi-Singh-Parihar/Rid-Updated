const mongoose = require("mongoose");

const testRequestSchema = new mongoose.Schema({
  teacherId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Teacher"
  },

  teacherName: String,

  testName: {
    type: String,
    required: true
  },

  subject: {
    type: String,
    required: true
  },

  banner: String,
  notesFile: String,

  description: String,

  questionsText: String,

  status: {
    type: String,
    enum: ["pending", "approved"],
    default: "pending"
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("TestRequest", testRequestSchema);