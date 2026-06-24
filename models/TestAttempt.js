const mongoose = require("mongoose");

const attemptSchema = new mongoose.Schema({

    testId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "TeacherTest",
        required: true
    },

    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },

    score: {
        type: Number,
        default: 0
    },

    startedAt: {
        type: Date,
        default: Date.now
    },
    sendSessionId: {
        type: String,
        required: true
    },

    completedAt: Date

}, {
    timestamps: true
});

module.exports = mongoose.model("TestAttempt", attemptSchema);