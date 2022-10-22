const express = require('express')
const checkToken = require('../../Middlewares/authCandidatesMiddleware')
const checkCandidatePresent = require('./checkCandidatePresent')
const createCandidate = require('./createCandidates')
const login_user = require('./loginCandidates')
const getCandidateAllottedTest = require('./getCandidateAllotedTest')
const router = express.Router()

router.get('/alloted_test',checkToken,getCandidateAllottedTest)
router.post('/login',login_user)
router.post('/',createCandidate)
router.post('/check',checkCandidatePresent)

module.exports = router