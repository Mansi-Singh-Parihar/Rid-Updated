const express = require("express");
const router = express.Router();

const TeacherTest = require("../../models/teacherTestModel");






router.get("/setting",(req,res)=>{
  res.render("NationalTestSeries/settings/setting.ejs")
})
// 🔥 Shorts MCQ Route
router.get("/shorts-mcq", async (req, res) => {

  try {

    const tests =
      await TeacherTest.find()

      .populate(
        "createdBy",
        "name"
      )

      .limit(10);

    let questions = [];

    tests.forEach(test => {

      test.questions.forEach(q => {

        questions.push({

          text: q.text,

          options: q.options,

          teacher: {

            _id:
              test.createdBy?._id,

            name:
              test.createdBy?.name

          }

        });

      });

    });

    res.render(
      "NationalTestSeries/ShortsMCQ/Shortsmcq",
      { questions }
    );

  }

  catch (err) {

    console.log(
      "MCQ ERROR:",
      err
    );

    res.send(
      "Error loading MCQ"
    );

  }

});

module.exports = router;