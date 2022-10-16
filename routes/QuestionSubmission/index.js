const router = require("express").Router();
const createQuestionSubmission = require("./createQuestionSubmission");
const editQuestionSubmission = require("./editQuestionSubmission");
const getQuestionSubmissionById = require("./getQuestionSubmissionById");

router.post("/", createQuestionSubmission);
router.patch("/:id", editQuestionSubmission);
router.get("/:id", getQuestionSubmissionById);

module.exports = router;
