const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const ensureTeacher = require("../middleware/authMiddleware"); // ✅ ADD THIS
const Teacher = require("../models/Teacher");
const Student = require("../models/Student");
const Message = require("../models/Message");
const sendMail = require("../utils/sendMail");
const Test = require("../models/Test");       // ✅ ALSO ADD
const Question = require("../models/Question"); // ✅ ALSO ADD
const ClassModel = require("../models/Class");
const PDFDocument = require("pdfkit");
const TeacherTest = require("../models/teacherTestModel");
const TestAttempt = require("../models/TestAttempt");
const TestRequest = require("../models/TestRequest");
const multer = require("multer");
const path = require("path");
const crypto = require("crypto");
// ================= DASHBOARD =================

router.get("/teacher-dashboard", ensureTeacher, async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const teacher = await Teacher.findById(decoded.userId);

    const students = await Student.find({
      teacherId: teacher._id
    }).lean();

    // Total Students
    const totalStudents = students.length;

    // Teacher Tests
    const teacherTests = await Test.find({
      teacherId: teacher._id
    }).select("_id");

    // Test IDs
    const testIds = teacherTests.map(t => t._id);

    // Students who actually attempted tests
    const totalAttempts = await TestAttempt.countDocuments({
      testId: { $in: testIds }
    });

    res.render(
      "tracher_deshboard/advance-version/teacher-test-version",
      {
        teacher,
        students,
        totalAttempts,
        totalStudents
      }
    );

  } catch (err) {
    console.log(err);
    res.redirect("/login");
  }
});

// ================= PROFILE UPDATE =================
router.post("/teacher/update-profile", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    await Teacher.findByIdAndUpdate(decoded.userId, req.body);

    res.json({ success: true });
  } catch (err) {
    console.log("Profile Update Error:", err);
    res.json({ success: false });
  }
});

// ================= ADD STUDENT =================
router.post("/teacher/add-student", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const newStudent = new Student({
      teacherId: decoded.userId,
      name: `${req.body.firstName || ''} ${req.body.lastName || ''}`.trim(),
      email: req.body.email || '',
      class: req.body.className || req.body.class || '',
      roll: req.body.roll || '',
      parentContact: req.body.parentContact || ''
    });

    await newStudent.save();
    res.json({ success: true, student: newStudent });

  } catch (err) {
    console.log("Add Student Error:", err);
    res.json({ success: false });
  }
});




// ================= DELETE STUDENT =================
router.delete("/teacher/delete-student/:id", async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    console.log("Delete Student Error:", err);
    res.json({ success: false });
  }
});

// ================= UPDATE STUDENT =================
router.put("/teacher/update-student/:id", async (req, res) => {
  try {
    const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

    const updateData = {
      name: `${req.body.firstName || ''} ${req.body.lastName || ''}`.trim(),
      email: req.body.email || '',
      class: req.body.className || req.body.class || '',
      roll: req.body.roll || '',
      parentContact: req.body.parentContact || ''
    };

    const updated = await Student.findOneAndUpdate(
      { _id: req.params.id, teacherId: decoded.userId },
      updateData,
      { new: true }
    );

    if (!updated) return res.json({ success: false });

    res.json({ success: true, student: updated });

  } catch (err) {
    console.log("Update Student Error:", err);
    res.json({ success: false });
  }
});

// ================= SEND MESSAGE =================


// ===== SEND MESSAGE =====
router.post("/teacher/send-message", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Save message in DB
    const newMsg = new Message({
      teacherId: decoded.userId,
      studentId: req.body.studentId,
      sender: "teacher",
      text: req.body.text
    });
    await newMsg.save();

    // Get student email
    const student = await Student.findById(req.body.studentId);

    // Send Email (optional)
    await sendMail(
      student.email,
      "New Message From Teacher",
      `Hello ${student.name},\n\n${req.body.text}\n\n- Teacher`
    );

    res.json({ success: true });

  } catch (err) {
    console.log("Send Message Error:", err);
    res.json({ success: false });
  }
});

// ================= GET MESSAGES =================
router.get("/teacher/messages/:studentId", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const messages = await Message.find({
      teacherId: decoded.userId,
      studentId: req.params.studentId
    }).sort({ createdAt: 1 });

    res.json(messages);
  } catch (err) {
    console.log("Get Message Error:", err);
    res.json([]);
  }
});

// ===== GET CONVERSATION LIST =====
// ===== GET Conversation List =====
router.get("/teacher/conversations", async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // last message per student
    const conversations = await Message.aggregate([
      { $match: { teacherId: new mongoose.Types.ObjectId(decoded.userId) } },
      { $sort: { createdAt: -1 } },
      {
        $group: {
          _id: "$studentId",
          lastMessage: { $first: "$text" },
          lastTime: { $first: "$createdAt" }
        }
      }
    ]);

    // attach student info
    const populated = await Student.populate(conversations, {
      path: "_id",
      select: "name"
    });

    res.json(populated);
  } catch (err) {
    console.log("Conversation Load Error:", err);
    res.json([]);
  }
});


// Send Test Logic
// Send Test Page Route
// ================= SEND TEST PAGE =================
router.get("/teacher/send-test-link/:testId", ensureTeacher, async (req, res) => {
  const test = await Test.findById(req.params.testId);


  const sendSessionId =
    crypto.randomBytes(8).toString("hex");

  const publicLink =
    `${req.protocol}://${req.get("host")}/student/start-test/${test._id}?session=${sendSessionId}`;
  res.json({ success: true, link: publicLink });
});

// ================= SEND TEST PAGE =================
router.get("/teacher/send-test-page/:testId", ensureTeacher, async (req, res) => {

  const test = await Test.findById(req.params.testId);

  if (!test) {
    return res.send("Test Not Found");
  }

  const sendSessionId =
    crypto.randomBytes(8).toString("hex");

  const publicLink =
    `${req.protocol}://${req.get("host")}/student/start-test/${test._id}?session=${sendSessionId}`;

  res.render(
    "tracher_deshboard/sendTestPage",
    {
      test,
      publicLink,
      sendSessionId
    }
  );

});

router.get("/teacher/my-tests", ensureTeacher, async (req, res) => {
  try {
    const teacherId = req.user._id;

    const regularTests = await Test.find({
      $or: [
        { teacherId },
        { teacherId: { $exists: false } }
      ]
    }).sort({ createdAt: -1 });

    const teacherTests = await TeacherTest.find({
      createdBy: teacherId,
      creatorModel: "Teacher"
    }).sort({ createdAt: -1 });

    const fullTests = await Promise.all([
      ...regularTests.map(async (test) => {
        const questions = await Question.find({ testId: test._id });
        const attemptCount = await require("../models/TestAttempt")
          .countDocuments({ testId: test._id });

        return {
          ...test.toObject(),
          name: test.title || test.name || "Untitled Test",
          questions,
          submissions: attemptCount,
          startDate: test.startDate,
          endDate: test.endDate,
          status: test.status || "published"
        };
      }),
      ...teacherTests.map((test) => ({
        ...test.toObject(),
        name: test.name || "Untitled Test",
        questions: Array.isArray(test.questions) ? test.questions : [],
        submissions: test.submissions || 0,
        startDate: test.startDate,
        endDate: test.endDate,
        status: test.status || "approved"
      }))
    ]);

    res.json(fullTests.sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)));

  } catch (err) {
    console.log("Load Tests Error:", err);
    res.json([]);
  }
});

router.get("/teacher/fix-test/:testId", async (req, res) => {
  const decoded = jwt.verify(req.cookies.token, process.env.JWT_SECRET);

  await Test.findByIdAndUpdate(req.params.testId, {
    teacherId: decoded.userId
  });

  res.send("Test fixed successfully");
});

// ================= CREATE TEST =================
router.post("/teacher/create-test", ensureTeacher, async (req, res) => {
  try {
    const { title, subject, className, duration, totalMarks, instructions, startDate, endDate, questions } = req.body;


    // 1️⃣ Save Test
    const newTest = new Test({
      title,
      subject,
      className,
      duration,
      totalMarks,
      instructions,
      startDate,
      endDate,
      teacherId: req.user._id

    });



    await newTest.save();

    // 2️⃣ Save all Questions
    const questionDocs = questions.map(q => ({
      testId: req.params.testId,
      type: q.type || "mcq",
      text: q.text,
      points: q.points || 1,

      options: (q.options || []).map(opt => ({
        text: opt.text || opt,
        isCorrect: opt.isCorrect || false
      }))
    }));

    await Question.insertMany(questionDocs);

    res.json({ success: true });

  } catch (err) {
    console.log("Create Test Error:", err);
    res.json({ success: false });
  }
});


// ================= VIEW TEST (Teacher Preview) =================
router.get("/teacher/view-test/:testId", ensureTeacher, async (req, res) => {

  try {

    // 🔥 USE TeacherTest MODEL
    const test = await TeacherTest.findById(req.params.testId);

    if (!test) {
      return res.send("Test Not Found");
    }

    // 🔥 Questions direct test object me ho sakte hain
    const dbQuestions = test.questions || [];

    const formattedQuestions = dbQuestions.map((q, index) => ({

      num: index + 1,

      question_en: q.question || q.text || "",
      question_hi: q.question || q.text || "",

      options_en:
        (q.options || []).map(o => ({
          text: o.text || o,
          isCorrect: o.isCorrect || false
        })),

      options_hi:
        (q.options || []).map(o => ({
          text: o.text || o,
          isCorrect: o.isCorrect || false
        })),

      answer_en:
        (q.options || []).find(o => o.isCorrect)?.text || "",

      answer_hi:
        (q.options || []).find(o => o.isCorrect)?.text || "",

      points: q.points || 1,

      attempted: false,
      selected: null

    }));

    res.render(
      "tracher_deshboard/advance-version/viewtest",
      {
        testTitle: test.name || test.title || test.testName,
        questions: formattedQuestions,
        duration: test.duration || 60,
        testId: test._id,
        sid: ""
      }
    );

  } catch (err) {

    console.log("View Test Error:", err);

    res.send("Error loading test");
  }
});

// ================= DELETE TEST =================
router.delete("/teacher/delete-test/:testId", ensureTeacher, async (req, res) => {
  try {
    const testId = req.params.testId;

    // Delete questions first
    await Question.deleteMany({ testId });

    // Delete test
    await Test.findByIdAndDelete(testId);

    res.json({ success: true });
  } catch (err) {
    console.log("Delete Test Error:", err);
    res.json({ success: false });
  }
});

// ================= UPDATE TEST =================
router.put("/teacher/update-test/:testId", ensureTeacher, async (req, res) => {
  try {
    const { title, subject, className, duration, totalMarks, instructions, startDate, endDate, questions } = req.body;


    // Update Test basic info
    await Test.findByIdAndUpdate(req.params.testId, {
      title, subject, className, duration, totalMarks, instructions,
      startDate,   // ✅ ADD
      endDate      // ✅ ADD
    });


    // Remove old questions
    await Question.deleteMany({ testId: req.params.testId });

    // Insert new questions
    const questionDocs = questions.map(q => ({
      testId: req.params.testId,
      type: q.type || "mcq",
      text: q.text,
      points: q.points || 1,

      options: (q.options || []).map(opt => ({
        text: opt.text || opt,
        isCorrect: opt.isCorrect || false
      }))
    }));

    await Question.insertMany(questionDocs);

    res.json({ success: true });
  } catch (err) {
    console.log("Update Test Error:", err);
    res.json({ success: false });
  }
});

// create class routes 
router.post("/teacher/create-class", ensureTeacher, async (req, res) => {
  try {
    // console.log("Logged Teacher:", req.user._id); // 👈 test log

    const newClass = new ClassModel({
      teacherId: req.user._id,   // ✅ now always defined
      name: req.body.name
    });

    await newClass.save();
    res.json({ success: true });

  } catch (err) {
    console.log("Create Class Error:", err);
    res.json({ success: false });
  }
});
router.get("/teacher/classes", ensureTeacher, async (req, res) => {
  try {
    const classes = await ClassModel.find({ teacherId: req.user._id });
    res.json(classes);
  } catch (err) {
    res.json([]);
  }
});

router.get("/teacher/analytics", ensureTeacher, (req, res) => {
  res.render("tracher_deshboard/analytics", {
    teacher: req.user   // optional but useful
  });
});
// ================= UPDATE CLASS =================
router.put("/teacher/update-class/:id", ensureTeacher, async (req, res) => {
  try {
    const oldClass = await ClassModel.findOne({
      _id: req.params.id,
      teacherId: req.user._id
    });

    if (!oldClass) return res.json({ success: false });

    // 🔥 update students also
    await Student.updateMany(
      { teacherId: req.user._id, class: oldClass.name },
      { $set: { class: "Unassigned" } }
    );

    oldClass.name = req.body.name;
    await oldClass.save();

    res.json({ success: true });
  } catch (err) {
    console.log(err);
    res.json({ success: false });
  }
});

// ================= DELETE CLASS =================
router.delete("/teacher/delete-class/:id", ensureTeacher, async (req, res) => {
  try {
    const deleted = await ClassModel.findOneAndDelete({
      _id: req.params.id,
      teacherId: req.user._id
    });

    if (!deleted) return res.json({ success: false });

    res.json({ success: true });
  } catch (err) {
    console.log("Delete Class Error:", err);
    res.json({ success: false });
  }
});
//upload profile
// router.post(
//   "/upload-profile",
//   upload.single("profileImage"),
//   async (req, res) => {
//     try {
//       const teacherId = req.user.id; // ya session id

//       const teacher = await Teacher.findById(teacherId);
//       teacher.profileImage = "/uploads/profile/" + req.file.filename;

//       await teacher.save();

//       res.json({
//         success: true,
//         image: teacher.profileImage
//       });
//     } catch (err) {
//       console.log(err);
//       res.json({ success: false });
//     }
//   }
// );
router.get("/advance-version", ensureTeacher, async (req, res) => {
  try {
    const token = req.cookies.token;
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const teacher = await Teacher.findById(decoded.userId);
    if (!teacher) return res.redirect("/login");

    res.render("tracher_deshboard/advance-version/teacher-test-version", {
      teacher
    });

  } catch (err) {
    console.log("Advance Dashboard Error:", err);
    res.redirect("/login");
  }
});
// All india test show the teacher this routes 
// 🔥 TEACHER CHANNEL (View Your Channel)
router.get("/teacher/channel", ensureTeacher, async (req, res) => {
  try {




    const storage = multer.diskStorage({
      destination: "public/uploads/",
      filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname);
      }
    });

    const upload = multer({ storage });

    router.post("/send-request", upload.single("notes"), async (req, res) => {
      try {
        const teacherId = req.user?.id || req.teacher?._id || req.body.teacherId;

        const request = await TestRequest.create({
          teacherId,
          notesFile: req.file ? `/uploads/${req.file.filename}` : "",
          description: req.body.description,
          status: "pending",
          banner: req.body.banner || ""
        });

        res.json({ success: true, request });
      } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: err.message });
      }
    });

    router.put("/api/update-test/:id", async (req, res) => {
      try {
        const updated = await Test.findByIdAndUpdate(
          req.params.id,
          req.body,
          { new: true }
        );

        res.json({ success: true, test: updated });
      } catch (err) {
        res.json({ success: false });
      }
    });




    const tests = await TeacherTest.find({
      teacher: req.user._id
    }).sort({ createdAt: -1 });

    res.render("NationalTestSeries/teacher/channel", { tests });

  } catch (err) {
    console.log("Channel Error:", err);
    res.send("Error loading channel");
  }
});
router.get("/teacher/:id", async (req, res) => {

  const questions = await Question.aggregate([
    {
      $lookup: {
        from: "tests",
        localField: "testId",
        foreignField: "_id",
        as: "test"
      }
    },
    { $unwind: "$test" },

    {
      $lookup: {
        from: "teachers",
        localField: "test.teacherId",
        foreignField: "_id",
        as: "teacher"
      }
    },
    { $unwind: "$teacher" },

    {
      $match: { "teacher._id": new mongoose.Types.ObjectId(req.params.id) }
    }
  ]);

  res.render("teacherProfile", { questions });
});

// ✅ multer setup top-level pe rakho
const storage = multer.diskStorage({
  destination: "public/uploads/",
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

router.post(
  "/teacher/send-request",
  upload.fields([
    { name: "banner", maxCount: 1 },
    { name: "notes", maxCount: 1 }
  ]),
  async (req, res) => {
    try {
      const token = req.cookies.token;
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const bannerFile = req.files?.banner?.[0];
      const notesFile = req.files?.notes?.[0];

      const newRequest = new TestRequest({
        teacherId: decoded.userId,
        teacherName: req.user?.name || "",
        testName: req.body.testName || "",
        subject: req.body.subject || "",
        banner: bannerFile ? `/uploads/${bannerFile.filename}` : "",
        notesFile: notesFile ? `/uploads/${notesFile.filename}` : "",
        description: req.body.description || "",
        status: "pending"
      });

      await newRequest.save();

      res.json({ success: true });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false });
    }
  }
);
// Student Register Page
router.get(
  "/teacher/student-register/:teacherId",
  async (req, res) => {
    try {

      const teacher = await Teacher.findById(req.params.teacherId);

      if (!teacher) {
        return res.send("Teacher not found");
      }

      res.render(
        "tracher_deshboard/advance-version/student-register.ejs",
        {
          teacher,
          teacherId: req.params.teacherId
        }
      );

    } catch (err) {
      console.log("Student Register Error:", err);
      res.status(500).send("Server Error");
    }
  }
);
// ================= PUBLIC ADD STUDENT =================

router.post(
  "/teacher/public-add-student",
  async (req, res) => {

    try {

      const {
        teacherId,
        name,
        email,
        class: className,
        roll,
        parentContact
      } = req.body;

      // ✅ check duplicate roll in same class
      const existingStudent = await Student.findOne({
        teacherId,
        class: className,
        roll: roll
      });

      if (existingStudent) {

        return res.json({
          success: false,
          message: "This roll number already exists in this class."
        });
      }

      // ✅ create student
      const student = new Student({
        teacherId,
        name,
        email,
        class: className,
        roll,
        parentContact
      });

      await student.save();

      res.json({
        success: true
      });

    } catch (err) {

      console.log(err);

      res.json({
        success: false,
        message: "Server error"
      });
    }
  }
);


router.get("/main", (req, res) => {
  res.render("index.ejs")
});


// ================= DOWNLOAD SOLUTION PDF =================
// ================= DOWNLOAD SOLUTION PDF =================
router.get("/teacher/solution/:testId", ensureTeacher, async (req, res) => {

  try {

    const test = await TeacherTest.findById(req.params.testId);

    if (!test) {
      return res.status(404).send("Test Not Found");
    }

    const doc = new PDFDocument({
      margin: 50,
      size: "A4"
    });
    const regularFont = path.join(
      __dirname,
      "../public/fonts/NotoSansDevanagari-Regular.ttf"
    );

    const boldFont = path.join(
      __dirname,
      "../public/fonts/NotoSansDevanagari-Bold.ttf"
    );

    doc.registerFont("Hindi", regularFont);
    doc.registerFont("HindiBold", boldFont);

    res.setHeader("Content-Type", "application/pdf");

    res.setHeader(
      "Content-Disposition",
      `inline; filename="${(test.name || test.title || "solution")}.pdf"`
    );

    doc.pipe(res);

    // ================= HEADER =================

    doc
      .fontSize(24)
      .font("HindiBold")
      .text("SOLUTION SHEET", {
        align: "center"
      });

    doc.moveDown(0.5);

    doc
      .fontSize(12)
      .font("Hindi")
      .fillColor("gray")
      .text(
        `Generated On: ${new Date().toLocaleDateString()}`,
        {
          align: "right"
        }
      );

    doc.moveDown();

    doc
      .fontSize(16)
      .font("HindiBold")
      .fillColor("blue")
      .text(`Test Name: ${test.name || test.title || "Untitled Test"}`);

    doc.moveDown(1.5);

    // ================= QUESTIONS =================

    (test.questions || []).forEach((q, index) => {

      const questionText =
        q.question_hi ||
        q.question_en ||
        q.question ||
        q.text ||
        "";

      // Question
      doc
        .fontSize(13)
        .font("HindiBold")
        .fillColor("black")
        .text(`Q${index + 1}. ${questionText}`, {
          width: 500
        });

      doc.moveDown(0.4);

      // Options
      (q.options || []).forEach((opt, i) => {

        const optionText =
          typeof opt === "object"
            ? opt.text
            : opt;

        const optionLetter =
          String.fromCharCode(65 + i);

        if (opt.isCorrect) {

          doc
            .font("HindiBold")
            .fontSize(11)
            .fillColor("green")
            .text(
              `${optionLetter}. ${optionText}   ✓ Correct Answer`,
              {
                indent: 25
              }
            );

        } else {

          doc
            .font("Hindi")
            .fontSize(11)
            .fillColor("black")
            .text(
              `${optionLetter}. ${optionText}`,
              {
                indent: 25
              }
            );
        }
      });

      doc.moveDown(0.7);

      // Correct Answer Box
      const correctOption = (q.options || []).find(
        o => o.isCorrect
      );

      if (correctOption) {

        doc
          .font("HindiBold")
          .fillColor("#006400")
          .text(
            `Correct Answer: ${correctOption.text}`,
            {
              indent: 25
            }
          );
      }

      doc.moveDown(0.8);

      // Divider Line
      doc
        .strokeColor("#cccccc")
        .lineWidth(1)
        .moveTo(50, doc.y)
        .lineTo(550, doc.y)
        .stroke();

      doc.moveDown(1);

      // Auto Page Break
      if (doc.y > 700) {
        doc.addPage();
      }
    });

    // ================= FOOTER =================

    doc.moveDown(2);

    doc
      .fontSize(10)
      .fillColor("gray")
      .text(
        "Generated by RID Bharat Test Management System",
        {
          align: "center"
        }
      );

    doc.end();

  } catch (err) {

    console.error("Solution PDF Error:", err);

    res.status(500).send("Server Error");
  }
});
module.exports = router;
