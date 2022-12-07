const express = require('express')
const getResultByAttemptsIdAndTestId = require('./getResultByAttemptsIdAndTestId')
const router = express.Router()


router.get('/:test_id/:question_id',getResultByAttemptsIdAndTestId)

module.exports = router
