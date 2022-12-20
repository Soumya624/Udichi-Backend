const express = require('express')
const getResultByAttemptsIdAndTestId = require('./getResultByAttemptsIdAndTestId')
const router = express.Router()


router.patch('/:test_id/:attempt_id',[authMiddleware],getResultByAttemptsIdAndTestId)

module.exports = router
