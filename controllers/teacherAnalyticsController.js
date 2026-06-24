const mongoose = require("mongoose");
const Student = require("../models/Student");
const Test = require("../models/Test");
const TestAttempt = require("../models/TestAttempt");

// ================================
// 🔹 TEST RANKING (MOST USED TEST)
// ================================
exports.getTestRankingList = async (req, res) => {
  try {
    // 🔥 TOKEN se teacherId lo (auth code change nahi)
    const teacherId = req.user?.userId || req.userId;

    if (!teacherId) {
      return res.status(401).json({ message: "Teacher not authenticated" });
    }

    const data = await Student.aggregate([
      {
        $match: {
          teacherId: new mongoose.Types.ObjectId(teacherId)
        }
      },

      { $unwind: "$assignedTests" },

      {
        $group: {
          _id: "$assignedTests.testId",
          studentsCount: { $sum: 1 },
          avgScore: { $avg: "$assignedTests.score" }
        }
      },

      { $sort: { studentsCount: -1 } },

      {
        $lookup: {
          from: "tests",
          localField: "_id",
          foreignField: "_id",
          as: "test"
        }
      },
      { $unwind: "$test" },

      {
        $project: {
          testId: "$_id",
          testName: "$test.title",
          studentsCount: 1,
          avgScore: { $round: ["$avgScore", 1] }
        }
      }
    ]);

    res.json(data);
  } catch (err) {
    console.error("Analytics error:", err);
    res.status(500).json({ message: "Analytics fetch failed" });
  }
};


// ========================================
// 🔹 DETAILS BUTTON – STUDENT RANKING
// ========================================


exports.getTestStudentDetails = async (req, res) => {
  try {

    const teacherId =
      req.user?.userId || req.userId;

    const testId =
      new mongoose.Types.ObjectId(req.params.testId);

    const sessionId =
      req.query.sessionId;

    let matchFilter = {
      testId
    };

    if (sessionId) {
      matchFilter.sendSessionId = sessionId;
    }

    const attempts =
      await TestAttempt.aggregate([

        {
          $match: matchFilter
        },

        {
          $lookup: {
            from: "students",
            localField: "studentId",
            foreignField: "_id",
            as: "student"
          }
        },

        {
          $unwind: "$student"
        },

        {
          $match: {
            "student.teacherId":
              new mongoose.Types.ObjectId(teacherId)
          }
        },

        {
          $project: {
            name: "$student.name",
            email: "$student.email",
            parentContact:
              "$student.parentContact",
            marks: "$score",
            status: {
              $cond: [
                { $gt: ["$score", -1] },
                "completed",
                "pending"
              ]
            }
          }
        },

        {
          $sort: {
            marks: -1
          }
        }

      ]);

    const ranked =
      attempts.map((s, i) => ({
        rank: i + 1,
        ...s
      }));

    res.json(ranked);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Details fetch failed"
    });

  }
};
