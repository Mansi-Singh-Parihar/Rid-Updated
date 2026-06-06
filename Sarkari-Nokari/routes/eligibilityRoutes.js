const express = require("express");

const eligibilityController = require(
  "../controllers/eligibilityController"
);

const {
  validateEligibilityInput,
} = require("../middleware/validation");

const router = express.Router();

router.get('/', eligibilityController.showForm);
router.post('/check', validateEligibilityInput, eligibilityController.checkEligibility);
router.get('/exam/:id', eligibilityController.getExamDetails);
router.get('/api/upcoming', eligibilityController.apiGetUpcoming);
router.get('/api/active', eligibilityController.apiGetActive);
router.get('/api/search', eligibilityController.apiSearchExams);


module.exports = router;