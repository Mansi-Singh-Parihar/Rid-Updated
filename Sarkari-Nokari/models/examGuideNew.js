const mongoose = require("mongoose");

const examGuideSchema = new mongoose.Schema({

  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    index: true,
  },

  title:    { type: String, default: "" },

  category: {
    type: String,
    required: true,
    enum: ["UPSC", "SSC", "Banking", "Railway", "Defence", "Police", "Teaching", "State PSC"],
    index: true,
  },

  overview:      { type: String, default: "" },
  alertNote:     { type: String, default: "" },

  stages: [
    {
      name:       { type: String, default: "" },
      stageType:  { type: String, default: "" },
      papers:     { type: String, default: "" },
      totalMarks: { type: String, default: "" },
      nature:     { type: String, default: "" },
    },
  ],
  structureNote: { type: String, default: "" },

  roadmap: [
    {
      step:  { type: Number },
      title: { type: String, default: "" },
      desc:  { type: String, default: "" },
      tag:   { type: String, default: "" },
    },
  ],

  syllabus: [
    {
      paperName:  { type: String, default: "" },
      marks:      { type: Number },
      colorClass: { type: String, default: "" },
      topics:     [{ type: String }],
    },
  ],

  books: [
    {
      title:   { type: String, default: "" },
      author:  { type: String, default: "" },
      subject: { type: String, default: "" },
      color:   { type: String, default: "" },
    },
  ],

  eligibility: {
    nationality: { type: String, default: "Indian Citizen" },
    ageMin:      { type: Number },
    ageMax:      { type: Number },

    ageRelaxation: {
      sc_st: { type: Number, default: 0 },
      obc:   { type: Number, default: 0 },
      pwd:   { type: Number, default: 0 },
      ews:   { type: Number, default: 0 },
    },

    education:             { type: String, default: "" },
    qualificationRequired: [{ type: String }],
    categoryEligibility:   [{ type: String }],

    genderEligibility: {
      type:    String,
      enum:    ["All", "Male", "Female"],
      default: "All",
    },

    stateEligibility: [{ type: String }],

    attemptsGen:  { type: String, default: "" },
    attemptsOBC:  { type: String, default: "" },
    attemptsScSt: { type: String, default: "" },
    ageRelaxNote: { type: String, default: "" },
  },

  salaryRange: {
    min:   { type: Number },
    max:   { type: Number },
    grade: { type: String, default: "" },
  },

  examType: {
    type: String,
    enum: ["National", "State", "Bank", "PSU", "Defense"],
  },

  examFrequency: {
    type: String,
    enum: ["Yearly", "Bi-Yearly", "Quarterly", "Monthly"],
  },

  totalVacancies: { type: Number },
  tags:           [{ type: String }],
  featured:       { type: Boolean, default: false },
  active:         { type: Boolean, default: true },

  officialSite:        { type: String, default: "" },
  applyLink:           { type: String, default: "" },
  notificationPdfLink: { type: String, default: "" },
  admitCardLink:       { type: String, default: "" },

  tips:        { type: String, default: "" },
  isPublished: { type: Boolean, default: false },

}, { timestamps: true });

examGuideSchema.index({ category: 1, active: 1 });
examGuideSchema.index({ "eligibility.ageMin": 1, "eligibility.ageMax": 1 });
examGuideSchema.index({ tags: 1, featured: 1 });

const ExamGuide = mongoose.model("ExamGuide", examGuideSchema);

module.exports = ExamGuide;