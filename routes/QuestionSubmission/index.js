const router = require("express").Router();
const checkQuestionSubmission = require("./checkQuestionSubmission");
const createQuestionSubmission = require("./createQuestionSubmission");
const editQuestionSubmission = require("./editQuestionSubmission");
const getQuestionSubmissionById = require("./getQuestionSubmissionById");

router.post("/", createQuestionSubmission);
router.get("/check/:test/:question/:candidate/:attempt_id",checkQuestionSubmission)
router.patch("/:id", editQuestionSubmission);
router.get("/:id", getQuestionSubmissionById);

module.exports = router;
