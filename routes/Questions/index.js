const express = require("express");
const router = express.Router();
const createQuestions = require("./createQuestions");
const getQuestionById = require("./getQuestionsById");
const editQuestions = require("./editQuestions");
const deleteQuestions = require("./deleteQuestions");

router.post('/',createQuestions)
router.get('/:id',getQuestionById)
router.patch('/:id',editQuestions)
router.delete('/:id',deleteQuestions)

module.exports = router