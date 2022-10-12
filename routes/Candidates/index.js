const express = require('express')
const checkCandidatePresent = require('./checkCandidatePresent')
const createCandidate = require('./createCandidates')
const router = express.Router()

router.post('/',createCandidate)
router.post('/check',checkCandidatePresent)

module.exports = router