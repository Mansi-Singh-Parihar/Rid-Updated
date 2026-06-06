const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    mobileNumber: {
      type: String,
      required: true,
      match: [/^[6-9]\d{9}$/, "Invalid mobile number"],
      index: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
      match: [/^\S+@\S+\.\S+$/, "Invalid email address"],
      index: true,
    },

    panNumber: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
      match: [/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/, "Invalid PAN number"],
      unique: true,
    },

    address: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },

    state: {
      type: String,
      required: true,
      trim: true,
    },

    district: {
      type: String,
      required: true,
      trim: true,
    },

    pincode: {
      type: String,
      required: true,
      match: [/^\d{6}$/, "Invalid PIN code"],
    },

    bankName: {
      type: String,
      required: true,
      trim: true,
    },

    accountNumber: {
      type: String,
      required: true,
      trim: true,
      minlength: 8,
      maxlength: 20,
      select: false, // security
    },

    ifscCode: {
      type: String,
      required: true,
      uppercase: true,
      trim: true,
      match: [/^[A-Z]{4}0[A-Z0-9]{6}$/, "Invalid IFSC code"],
    },

    upiId: {
      type: String,
      trim: true,
      default: "",
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    },

    approvedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Admin",
      default: null,
    },

    approvedAt: {
      type: Date,
      default: null,
    },

    rejectionReason: {
      type: String,
      default: "",
    },

    ipAddress: {
      type: String,
      default: "",
    },

    userAgent: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

// Prevent duplicate applications
applicationSchema.index(
  { email: 1, panNumber: 1 },
  { unique: true }
);

module.exports = mongoose.model(
  "MonetizationApplication",
  applicationSchema
);