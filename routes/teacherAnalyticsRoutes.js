const express = require("express");
const router = express.Router();
const ensureTeacher = require("../middleware/authMiddleware");

const TestAttempt = require("../models/TestAttempt");
const Student = require("../models/Student");
const TeacherTest = require("../models/teacherTestModel");
const Test = require("../models/Test");
const ExcelJS = require("exceljs");
const PDFDocument = require("pdfkit");

/* =========================================================
   🔹 STUDENT RANKING DETAILS (TABLE DATA)
   ========================================================= */
router.get(
  "/api/teacher/analytics/test/:testId/details",
  ensureTeacher,
  async (req, res) => {
    try {
      const { testId } = req.params;

      // ✅ Check test belongs to teacher
      const test = await TeacherTest.findOne({
        _id: testId,
        createdBy: req.user._id
      });

      if (!test) {
        return res.json([]);
      }

      const attempts = await TestAttempt.find({ testId })
        .populate("studentId", "name email roll parentContact")
        .sort({ score: -1 });
      const result = attempts.map((a, index) => ({
        rank: index + 1,
        name: a.studentId?.name || "N/A",
        email: a.studentId?.email || "-",
        roll: a.studentId?.roll || "-",
        parentContact: a.studentId?.parentContact || "-",
        marks: a.score || 0,
        status: a.score >= 33 ? "Pass" : "Fail"
      }));

      res.json(result);
    } catch (err) {
      console.error("Analytics Details Error:", err);
      res.json([]);
    }
  }
);


/* =========================================================
   🔹 EXPORT AS EXCEL
   ========================================================= */
router.get(
  "/api/teacher/analytics/test/:testId/export/excel",
  ensureTeacher,
  async (req, res) => {
    try {
      const { testId } = req.params;

      // ✅ Check ownership
      const test = await TeacherTest.findOne({
        _id: testId,
        createdBy: req.user._id
      });

      if (!test) {
        return res.status(403).send("Unauthorized");
      }

      const workbook = new ExcelJS.Workbook();
      const sheet = workbook.addWorksheet("Student Analytics");

      sheet.columns = [
        { header: "Rank", key: "rank", width: 10 },
        { header: "Name", key: "name", width: 25 },
        { header: "Email", key: "email", width: 30 },
        { header: "Roll", key: "roll", width: 15 },
        { header: "Parent", key: "parent", width: 20 },
        { header: "Marks", key: "marks", width: 10 },
        { header: "Status", key: "status", width: 10 }
      ];

      const attempts = await TestAttempt.find({ testId })
        .populate("studentId", "name email roll parentContact")
        .sort({ score: -1 });

      attempts.forEach((a, index) => {
        sheet.addRow({
          rank: index + 1,
          name: a.studentId?.name || "",
          email: a.studentId?.email || "",
          roll: a.studentId?.roll || "",
          parent: a.studentId?.parentContact || "",
          marks: a.score || 0,
          status: a.score >= 33 ? "Pass" : "Fail"
        });
      });

      res.setHeader(
        "Content-Type",
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      );
      res.setHeader(
        "Content-Disposition",
        "attachment; filename=student-analytics.xlsx"
      );

      await workbook.xlsx.write(res);
      res.end();
    } catch (err) {
      console.error("Excel Export Error:", err);
      res.status(500).send("Excel Export Failed");
    }
  }
);

/* =========================================================
   🔹 EXPORT AS PDF
   ========================================================= */
/* =========================================================
   🔹 EXPORT AS PDF
   ========================================================= */
router.get(
  "/api/teacher/analytics/test/:testId/export/pdf",
  ensureTeacher,
  async (req, res) => {
    try {
      const { testId } = req.params;

      const test = await TeacherTest.findOne({
        _id: testId,
        createdBy: req.user._id
      });

      if (!test) {
        return res.status(403).send("Unauthorized");
      }

      const attempts = await TestAttempt.find({ testId })
        .populate("studentId", "name email roll parentContact")
        .sort({ score: -1 });

      const doc = new PDFDocument({
        size: "A4",
        margin: 30
      });

      res.setHeader("Content-Type", "application/pdf");
      res.setHeader(
        "Content-Disposition",
        `attachment; filename=${test.name}-analytics.pdf`
      );

      doc.pipe(res);

      // ==========================
      // HEADER
      // ==========================
      doc
        .fontSize(22)
        .text("Student Analytics Report", {
          align: "center"
        });

      doc.moveDown();

      doc.fontSize(12);
      doc.text(`Test Name: ${test.name}`);
      doc.text(`Subject: ${test.subject}`);
      doc.text(`Total Students: ${attempts.length}`);
      doc.text(`Generated: ${new Date().toLocaleString()}`);

      doc.moveDown(2);

      // ==========================
      // TABLE HEADER
      // ==========================
      let y = doc.y;

      const cols = {
        rank: 30,
        name: 80,
        roll: 210,
        email: 280,
        marks: 470,
        status: 530
      };

      doc.font("Helvetica-Bold");
      doc.fontSize(11);

      doc.text("Rank", cols.rank, y);
      doc.text("Name", cols.name, y);
      doc.text("Roll", cols.roll, y);
      doc.text("Email", cols.email, y);
      doc.text("Marks", cols.marks, y);
      doc.text("Status", cols.status, y);

      y += 20;

      doc.moveTo(25, y - 5)
        .lineTo(580, y - 5)
        .stroke();

      doc.font("Helvetica");

      // ==========================
      // TABLE DATA
      // ==========================
      attempts.forEach((attempt, index) => {

        if (y > 740) {

          doc.addPage();

          y = 50;

          doc.font("Helvetica-Bold");

          doc.text("Rank", cols.rank, y);
          doc.text("Name", cols.name, y);
          doc.text("Roll", cols.roll, y);
          doc.text("Email", cols.email, y);
          doc.text("Marks", cols.marks, y);
          doc.text("Status", cols.status, y);

          y += 20;

          doc.moveTo(25, y - 5)
            .lineTo(580, y - 5)
            .stroke();

          doc.font("Helvetica");
        }

        const student = attempt.studentId;

        const marks = attempt.score || 0;

        const status = "Completed";

        doc.text(
          String(index + 1),
          cols.rank,
          y
        );

        doc.text(
          student?.name || "-",
          cols.name,
          y,
          {
            width: 120,
            lineBreak: false
          }
        );

        doc.text(
          student?.roll || "-",
          cols.roll,
          y
        );

        doc.text(
          student?.email || "-",
          cols.email,
          y,
          {
            width: 160,
            lineBreak: false
          }
        );

        doc.text(
          String(marks),
          cols.marks,
          y
        );

        doc.text(
          status,
          cols.status,
          y,
          {
            width: 70,
            lineBreak: false
          }
        );

        y += 35;
      });

      // ==========================
      // FOOTER
      // ==========================
      doc.fontSize(10);

      doc.text(
        "Generated by RID Bharat Analytics System",
        0,
        790,
        {
          width: 595,
          align: "center",
          lineBreak: false
        }
      );

      doc.end();

    } catch (err) {

      console.error("PDF Export Error:", err);

      res.status(500).send("PDF Export Failed");
    }
  }
);
/* =========================================================
   🔹 ANALYTICS CARDS DATA
   ========================================================= */
router.get(
  "/api/my-tests",
  ensureTeacher,
  async (req, res) => {
    try {

      const tests = await TeacherTest.find({
        createdBy: req.user._id
      }).sort({ createdAt: -1 });

      const analytics = await Promise.all(

        tests.map(async (test) => {

          const attempts = await TestAttempt.find({
            testId: test._id
          });

          const students = attempts.length;

          let avgScore = 0;

          if (students > 0) {

            const total = attempts.reduce(
              (sum, item) => sum + (item.score || 0),
              0
            );

            avgScore = (total / students).toFixed(1);
          }

          return {
            _id: test._id,
            testName: test.name || "Untitled Test",
            subject: test.subject || "N/A",
            students,
            avgScore,
            time: new Date(test.createdAt)
              .toLocaleDateString()
          };
        })
      );

      res.json(analytics);

    } catch (err) {

      console.error("My Tests Analytics Error:", err);

      res.status(500).json({
        success: false,
        message: "Server Error"
      });
    }
  }
);
/* =========================================================
   🔹 ANALYTICS PAGE
========================================================= */
router.get(
  "/teacher/analytics/:testId",
  ensureTeacher,
  async (req, res) => {

    try {

      const { testId } = req.params;

      const test = await TeacherTest.findById(testId);

      if (!test) {
        return res.send("Test not found");
      }

      res.render(
        "tracher_deshboard/advance-version/sendtestprocess/analytics",
        {
          testId,
          testName: test.name || "Untitled Test"
        }
      );

    } catch (err) {

      console.log(err);

      res.send("Server Error");

    }
  }
);
module.exports = router;
