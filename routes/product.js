
const express = require("express");
const router = express.Router();

router.get("/image-tools"),(erq,res)=>{
    res.render("imagetools/compreesimage")
}

router.get("/image-tools",(req,res)=>{
  res.render("product/imagetools/compreesimage")
})
router.get("/convertimage",(req,res)=>{
  res.render("product/imagetools/convertimage")
  })
 router.get("/convertpdf",(req,res)=>{
  res.render("product/imagetools/convertpdf")
  })
router.get("/cropimage",(req,res)=>{
  res.render("product/imagetools/crop")
  })

  router.get("/resize-image",(req,res)=>{
  res.render("product/imagetools/resizeimage.ejs")
  })
// router.get("/imagebackgroundremover",(req,res)=>{
//   res.render("product/imagetools/imagebackground")
//   })
router.get("/mergeimage",(req,res)=>{
  res.render("product/imagetools/mergeimage")
  })
router.get("/textocr",(req,res)=>{
  res.render("product/imagetools/textocr")
  })
router.get("/resize",(req,res)=>{
  res.render("product/imagetools/resizeimage.ejs")
  })
  /////////////////////////pdf tools routes/////////////


  //  router.get("/addpassword",(req,res)=>{
  // res.render("product/pdftools/addpassword")
  // })
router.get("/converterpdf",(req,res)=>{
  res.render("product/pdftools/convertpdf_excel.ejs")
  })
router.get("/converterword",(req,res)=>{
  res.render("product/pdftools/convertword")
  })
 
    router.get("/convertexcel",(req,res)=>{
  res.render("product/pdftools/convertexcel_pdf.ejs")
  })

  router.get("/convertword",(req,res)=>{
  res.render("product/pdftools/convertpdf_word.ejs")
  })
  // router.get("/convertpdftoexcel",(req,res)=>{
  // res.render("product/pdftools/convertpdf_excel.ejs")
  // })
  

  router.get("/mergepdf",(req,res)=>{
  res.render("product/pdftools/mergepdf.ejs")
  })
  router.get("/splitpdf",(req,res)=>{
  res.render("product/pdftools/splitpdf.ejs")
  })
  
  router.get("/pdfjpg",(req,res)=>{
  res.render("product/pdftools/pdf_jpg.ejs")
  })
 
  router.get("/removepassword",(req,res)=>{
  res.render("pdftools/removepassword_pdf.ejs")
  })

  ///////////////////////////////////////////text tools routes////////////////////////////
  router.get("/text-tools",(req,res)=>{
  res.render("product/texttools/wordcounter")
  })
  router.get("/wordcounter",(req,res)=>{
  res.render("product/texttools/wordcounter")
  })
  router.get("/charactercounter",(req,res)=>{
  res.render("product/texttools/character")
  })
  router.get("/grammarchecker",(req,res)=>{
  res.render("product/texttools/grammar.ejs")
  })
  router.get("/plagiarismchecker",(req,res)=>{
 res.render("product/texttools/plagiarism.ejs") 
  })
  router.get("/caseconverter",(req,res)=>{
  res.render("product/texttools/case_converter.ejs")
  })
  router.get("/texttospeech",(req,res)=>{
  res.render("product/texttools/text_speech.ejs")
  })
  router.get("/speechtotext",(req,res)=>{
  res.render("product/texttools/speech_text.ejs")
  })
  router.get("/handwritingtotext",(req,res)=>{
  res.render("product/texttools/handwriting_text.ejs")
   })


   // footer parts all routes 
    router.get("/contact",(req,res)=>{
  res.render("footerparts/contact.ejs")
   })
    router.get("/Disclaimer",(req,res)=>{
  res.render("footerparts/Disclaimer.ejs")
   })
    router.get("/privacy&policy",(req,res)=>{
  res.render("footerparts/PrivacyPolicy.ejs")
   })
    router.get("/terms&conditions",(req,res)=>{
  res.render("footerparts/Terms&Conditions.ejs")
   })
module.exports = router;