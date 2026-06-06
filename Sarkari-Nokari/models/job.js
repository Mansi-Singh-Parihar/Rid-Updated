const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  examGuideSlug: { type: String, default: "" },
  title: String,
  organization: String,

  state: {
    type: String,
    lowercase: true,
  },

  totalPosts: Number,
  category: String,

  notificationDate: Date,
  applyStartDate: Date,
  lastDate: Date,

  examDate: String,
  admitCardInfo: String,
  eligibility: String,

  ageMin: Number,
  ageMax: Number,

  feeGeneral: Number,
  feeSCST: Number,

  vacancyDetails: {
    UR: Number,
    OBC: Number,
    EWS: Number,
    SC: Number,
    ST: Number,
  },

  selectionProcess: [String],

  applyLink: String,
  notificationLink: String,
  officialSite: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Job =
  mongoose.models.Job ||
  mongoose.model("Job", jobSchema);

module.exports = Job;