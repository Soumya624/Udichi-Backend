const express = require('express')
const createQuestionGroup = require('./createQuestionGroup')
const deleteQuestionGroup = require('./deleteQuestionGroup')
const editQuestionGroup = require('./editQuestionGroup')
const getAllQuestionGroups = require('./getAllQuestionGroups')
const getQuestionsGroupById = require('./getQuestionsGroupById')
const router = express.Router()

router.get('/',getAllQuestionGroups)
router.post('/',createQuestionGroup)
router.get('/:id',getQuestionsGroupById)
router.patch('/:id',editQuestionGroup)
router.delete('/:id',deleteQuestionGroup)

module.exports = router