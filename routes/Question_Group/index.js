const express = require('express')
const addQuestionToGroup = require('./addQuestionToGroup')
const createQuestionAndAssignQuestionGroup = require('./createQuestionAndAssignQuestionGroup')
const createQuestionGroup = require('./createQuestionGroup')
const deleteQuestionGroup = require('./deleteQuestionGroup')
const editQuestionGroup = require('./editQuestionGroup')
const getAllQuestionGroups = require('./getAllQuestionGroups')
const getQuestionsGroupById = require('./getQuestionsGroupById')
const router = express.Router()

router.get('/',getAllQuestionGroups)
router.get('/:id',getQuestionsGroupById)
router.post('/',createQuestionGroup)
router.patch("/assign/:id",addQuestionToGroup)
router.post("/create/:id",createQuestionAndAssignQuestionGroup)
router.patch('/:id',editQuestionGroup)
router.delete('/:id',deleteQuestionGroup)

module.exports = router