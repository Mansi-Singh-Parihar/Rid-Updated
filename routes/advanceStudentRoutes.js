const express = require("express");
const router = express.Router();

const TeacherTest = require("../models/teacherTestModel");
const Student = require("../models/Student");
const TestAttempt = require("../models/TestAttempt");

// =================================================
// OPEN EMAIL PAGE
// =================================================
router.get("/open/:testId", async (req,res)=>{

    const sessionId =
    req.query.session;

    res.render(
      "tracher_deshboard/advance-version/sendtestprocess/enterEmail",
      {
        testId:req.params.testId,
        sessionId
      }
    );
});

// =================================================
// STEP 1 → CHECK EMAIL
// =================================================
router.post("/check-email", async (req, res) => {
    try {
        const {
 email,
 testId,
 sessionId
} = req.body;

        const test = await TeacherTest.findById(testId);
        if (!test) return res.send("Test not found");

        const teacherId = test.createdBy || test.teacherId || test.teacher;

        if (!teacherId) {
            console.error("Teacher ID missing in test document:", test);
            return res.send("Teacher ID missing");
        }

        let student = await Student.findOne({
            email,
            teacherId
        });

        if (student) {
           return res.redirect(
`/advance-student/check-attempt/${student._id}/${testId}?session=${sessionId}`
);
        }

       res.render(
"tracher_deshboard/advance-version/sendtestprocess/registerStudent",
{
 testId,
 email,
 teacherId,
 sessionId
}
);
    } catch (err) {
        console.error("Email check error:", err);
        res.send("Server error");
    }
});

// =================================================
// STEP 2 → REGISTER + START
// =================================================
router.post("/register-and-start", async (req, res) => {
    try {
       const {
 name,
 email,
 className,
 roll,
 parentContact,
 testId,
 teacherId,
 sessionId
} = req.body;

        const test = await TeacherTest.findById(testId);
        if (!test) return res.send("Test not found");

        const finalTeacherId = teacherId || test.createdBy || test.teacherId || test.teacher;

        if (!finalTeacherId) {
            console.error("Teacher ID missing in test document:", test);
            return res.send("Teacher ID missing");
        }

        let student = await Student.findOne({
            email,
            teacherId: finalTeacherId
        });

        if (!student) {
            student = new Student({
                teacherId: finalTeacherId,
                name,
                email,
                class: className,
                roll,
                parentContact
            });

            await student.save();
        }

        res.redirect(
`/advance-student/check-attempt/${student._id}/${testId}?session=${sessionId}`
);
    } catch (err) {
        console.error("Register error:", err);
        res.send("Registration failed");
    }
});

// =================================================
// STEP 3 → CHECK ATTEMPT
// =================================================
router.get("/check-attempt/:studentId/:testId", async (req, res) => {
    try {
        const { studentId, testId } = req.params;

       const sessionId = req.query.session;

const already = await TestAttempt.findOne({
    studentId,
    testId,
    sendSessionId: sessionId
});

        if (already) {
            return res.send(
                `<script>alert("You already attempted this test");window.close();</script>`
            );
        }

        res.redirect(
`/advance-student/start/${testId}?sid=${studentId}&session=${sessionId}`
);
    } catch (err) {
        console.error(err);
        res.send("Error");
    }
});

// =================================================
// STEP 4 → START TEST
// =================================================
router.get("/start/:testId", async (req, res) => {
    try {
        const testId = req.params.testId;
        const studentId = req.query.sid;
const sessionId = req.query.session;
        const test = await TeacherTest.findById(testId);
        if (!test) return res.send("Test not found");

        const existingAttempt = await TestAttempt.findOne({
    studentId,
    testId,
    sendSessionId: sessionId
});

        if (!existingAttempt) {
            await TestAttempt.create({
    studentId,
    testId,
    score: 0,
    sendSessionId: sessionId,
    startedAt: new Date()
});
        }

       res.render("tracher_deshboard/advance-version/viewtest", {
    testTitle: test.name,
    questions: test.questions,
    duration: test.duration,
    testId: test._id,
    sid: studentId,
    sessionId
});
    } catch (err) {
        console.error("Start test error:", err);
        res.send("Server error");
    }
});

module.exports = router;