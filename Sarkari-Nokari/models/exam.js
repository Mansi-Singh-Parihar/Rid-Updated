const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      index: true,
    },

    department: {
      type: String,
      required: true,
      enum: [
        "UPSC",
        "SSC",
        "Banking",
        "Railway",
        "Defence",
        "Police",
        "Teaching",
        "State PSC",
      ],
    },

    qualificationRequired: [
      {
        type: String,
        enum: [
          "10th",
          "12th",
          "Graduation",
          "Post Graduation",
          "Diploma",
          "ITI",
          "PhD",
        ],
        required: true,
      },
    ],

    minimumAge: {
      type: Number,
      required: true,
      default: 18,
    },

    maximumAge: {
      type: Number,
      required: true,
      default: 35,
    },

    ageRelaxation: {
      sc_st: Number,
      obc: Number,
      pwd: Number,
      ews: Number,
    },

    stateEligibility: [
      {
        type: String,
        default: ["All India"],
      },
    ],

    categoryEligibility: [
      {
        type: String,
        enum: [
          "General",
          "OBC",
          "SC",
          "ST",
          "EWS",
          "All",
        ],
        default: [
          "General",
          "OBC",
          "SC",
          "ST",
          "EWS",
        ],
      },
    ],

    genderEligibility: {
      type: String,
      enum: ["All", "Male", "Female"],
      default: "All",
    },

    salaryRange: {
      min: Number,
      max: Number,
      grade: String,
    },

    examType: {
      type: String,
      enum: [
        "National",
        "State",
        "Bank",
        "PSU",
        "Defense",
      ],
      required: true,
    },

    examLevel: {
      type: String,
      enum: [
        "Preliminary",
        "Mains",
        "Interview",
        "Skill Test",
        "Document Verification",
      ],
      default: "Preliminary",
    },

    applicationStartDate: Date,
    lastDate: Date,
    admitCardDate: Date,
    resultDate: Date,

    officialWebsite: String,

    tags: [String],

    featured: {
      type: Boolean,
      default: false,
    },

    active: {
      type: Boolean,
      default: true,
    },

    notificationUrl: String,

    totalVacancies: Number,

    examFrequency: {
      type: String,
      enum: [
        "Yearly",
        "Bi-Yearly",
        "Quarterly",
        "Monthly",
      ],
    },
  },
  {
    timestamps: true,
  }
);

// Indexes for faster queries
examSchema.index({ department: 1, active: 1 });

examSchema.index({
  qualificationRequired: 1,
  minimumAge: 1,
  maximumAge: 1,
});

examSchema.index({
  tags: 1,
  featured: 1,
});

// Check if model exists before creating
const Exam =
  mongoose.models.Exam ||
  mongoose.model("Exam", examSchema);

module.exports = Exam;