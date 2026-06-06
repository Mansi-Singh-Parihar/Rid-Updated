const mongoose = require("mongoose");

const admitSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  examGuideSlug: { type: String, default: "" },
  

  organization: {
    type: String,
    required: true,
  },

  state: {
    type: String,
    lowercase: true,
  },

  category: String,

  applyStartDate: Date,
  applyLastDate: Date,
  releaseDate: Date,
  examDate: String,

  totalPosts: Number,
  eligibility: String,

  ageLimit: {
    min: Number,
    max: Number,
  },

  fee: {
    general: String,
    scSt: String,
    female: String,
  },

  selectionProcess: [String],

  downloadLink: String,
  applyLink: String,
  officialSite: String,

  reportingTime: String,
  note: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Admit =
  mongoose.models.Admit ||
  mongoose.model("Admit", admitSchema);

module.exports = Admit;