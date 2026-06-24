const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

const Message = require("../models/Message");
const Test = require("../models/Test");
const Question = require("../models/Question");   // ✅ MISSING FIX
const Student = require("../models/Student");
const ClassModel = require("../models/Class");
const TestAttempt = require("../models/TestAttempt");


// =================================================
// PUBLIC LINK → OPEN LANDING PAGE (START PAGE)
// =================================================
router.get("/student/start-test/:testId", async (req,res)=>{
  try {
    const test = await Test.findById(req.params.testId);
    if(!test) return res.send("Test Not Found");

   const sessionId = req.query.session || "";

res.render("student/testPage", {
  testTitle: test.title,
  duration: test.duration,
  testId: test._id,
  sessionId
});

  } catch(err){
    console.log("Start Page Error:", err);
    res.send("Error loading test");
  }
});


// =================================================
// STEP 1 → CHECK EMAIL
router.post("/student/check-email", async (req,res)=>{
  try{
   

    const test = await Test.findById(testId);
    if(!test) return res.send("Test not found");

    // ✅ teacher ke students me email check
    const student = await Student.findOne({
      email,
      teacherId: test.teacherId
    });

    const { email, testId, sessionId } = req.body;

if(student){
  return res.redirect(
    `/student/check-attempt/${student._id}/${testId}?session=${sessionId}`
  );
}

res.render("student/registerStudent", {
  testId,
  email,
  sessionId
});

  }catch(err){
    console.log("Email Check Error:", err);
    res.send("Error");
  }
});


// =================================================
// STEP 2 → REGISTER NEW STUDENT + START
router.post("/student/register-and-start", async (req,res)=>{
  try {
    const {
  name,
  email,
  className,
  parentContact,
  testId,
  sessionId
} = req.body;

    // 🔎 Find test
    const test = await Test.findById(testId);
    if(!test) return res.send("Test not found");

    // ✅ SAFETY CHECK (OLD TESTS FIX)
    if (!test.teacherId) {
      return res.send(
        "This test is not linked with teacher. Please contact teacher."
      );
    }

    // ✅ Create student
    const newStudent = new Student({
      teacherId: test.teacherId,
      name,
      email,
      class: className,
      // roll,
      parentContact
    });

    // ✅ Save student
    await newStudent.save();

    // ✅ Increase test student count
    await Test.findByIdAndUpdate(testId, {
      $inc: { totalStudents: 1 }
    });

    // ✅ Redirect to test
   res.redirect(
  `/student/check-attempt/${newStudent._id}/${testId}?session=${sessionId}`
);

  } catch(err){
    console.log("Student Register Error:", err);
    res.send("Registration failed");
  }
});




// =================================================
// STEP 3 → CHECK DUPLICATE ATTEMPT
// =================================================
router.get("/student/check-attempt/:studentId/:testId", async (req,res)=>{
  const { studentId, testId } = req.params;

  const sessionId = req.query.session;

const already =
await TestAttempt.findOne({
  studentId,
  testId,
  sendSessionId: sessionId
});

  if(already){
    return res.send(`<script>alert("You already attempted this test");</script>`);
  }

  res.redirect(
`/student/do-test/${testId}?sid=${studentId}&session=${sessionId}`
);
});


// =================================================
// STEP 4 → REAL TEST UI
router.get("/student/do-test/:testId", async (req,res)=>{
  try {
    const testId = req.params.testId;
    const studentId = req.query.sid;  // sid already tum bhej rahe ho
const sessionId = req.query.session;
    const test = await Test.findById(testId);
    if(!test) return res.send("Test Not Found");

    // ✅ AUTO CREATE ATTEMPT WHEN TEST STARTS
    const existingAttempt =
await TestAttempt.findOne({
  studentId,
  testId,
  sendSessionId: sessionId
});

    if(!existingAttempt){
     await TestAttempt.create({
   studentId,
   testId,
   score:0,
   sendSessionId: sessionId,
   startedAt:new Date()
});
    }

    const dbQuestions = await Question.find({ testId });

    const formattedQuestions = dbQuestions.map((q, index) => ({
      num: index + 1,
      question_en: q.text,
      question_hi: q.text,
      options_en: q.options,
      options_hi: q.options,
      answer_en: q.options[q.correctAnswer],
      answer_hi: q.options[q.correctAnswer],
      points: q.points || 1,
      attempted: false,
      selected: ""
    }));

  res.render(
"tracher_deshboard/viewtext",
{
 testTitle:test.title,
 questions:formattedQuestions,
 duration:test.duration,
 testId:test._id,
 sid:studentId,
 sessionId
});


  } catch (err) {
    console.log("Public Test Load Error:", err);
    res.send("Error loading test");
  }
});


// =================================================
// STEP 5 → SAVE TEST ATTEMPT  ✅ FINAL FIX
// =================================================
router.post("/student/submit-test", async (req, res) => {
  try {
     const {
 studentId,
 testId,
 score,
 sendSessionId
} = req.body;

    // 1️⃣ Update / Create TestAttempt
    await TestAttempt.findOneAndUpdate(
      { studentId, testId, sendSessionId},
      {
        score,
        completedAt: new Date()
      },
      { upsert: true }
    );

    // 2️⃣ Update Student.assignedTests (🔥 MOST IMPORTANT)
    const student = await Student.findById(studentId);

    if (student) {
      const existingTest = student.assignedTests.find(
        t => t.testId.toString() === testId
      );

      if (existingTest) {
        // 🔁 already exists → update
        existingTest.score = score;
        existingTest.status = "completed";
      } else {
        // ➕ first time → push
        student.assignedTests.push({
          testId,
          score,
          status: "completed"
        });
      }

      await student.save();
    }

    // 3️⃣ Increase Test submission count
    await Test.findByIdAndUpdate(testId, {
      $inc: { submissions: 1 }
    });

    res.send("OK");
  } catch (err) {
    console.error("Submit Error:", err);
    res.status(500).send("Submit Failed");
  }
});

// =================================================
// STUDENT MESSAGE SYSTEM (unchanged)
// =================================================
router.get("/student/messages", async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

    const messages = await Message.find({
      studentId: decoded.userId
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    res.json([]);
  }
});

module.exports = router;
