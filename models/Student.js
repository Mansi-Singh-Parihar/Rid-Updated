const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    teacherId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: true,
        index: true
    },

    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        lowercase: true
    },

    class: String,
    // roll: String,
    parentContact: String,

    assignedTests: [{
        testId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "TeacherTest"
        },
        status: {
            type: String,
            default: "pending"
        },
        score: {
            type: Number,
            default: 0
        }
    }]

}, {
    timestamps: true
});

module.exports = mongoose.model("Student", studentSchema);