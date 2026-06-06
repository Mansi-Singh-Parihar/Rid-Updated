const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  title: String,
  examGuideSlug: { type: String, default: "" },

  organization: String,

  category: String,

  state: {
    type: String,
    lowercase: true,
  },

  examDate: String,

  resultDate: Date,

  resultType: String,

  totalPosts: Number,

  selectionProcess: [String],

  resultLink: String,

  officialSite: String,

  meritListLink: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Result =
  mongoose.models.SarkariResult ||
  mongoose.model("SarkariResult", resultSchema);

module.exports = Result;