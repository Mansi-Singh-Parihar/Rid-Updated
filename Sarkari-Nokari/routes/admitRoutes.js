const express = require("express");
const { verifyAdmin } = require("../middleware/auth");

const {
  addAdmit,
  getAdmits,
  getAdmitById,
  updateAdmit,
  deleteAdmit,
  getAdmitPage,
} = require("../controllers/admitController");

const router = express.Router();

// ─── SSR Page (renders admit.ejs with live DB data) ──────────────────────────
// router.get("/admit-cards", getAdmitPage);
router.get("/admit", getAdmitPage);
// ─── REST API (JSON) — matches your original pattern ─────────────────────────
router.post("/add-admit", verifyAdmin, addAdmit);
router.get("/admits", getAdmits);
router.get("/admit/:id", getAdmitById);
router.put("/admit/:id", verifyAdmin, updateAdmit);
router.delete("/admit/:id", verifyAdmin, deleteAdmit);

module.exports = router;