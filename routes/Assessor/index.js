const express = require('express')
const router = express.Router()
const login_user = require('./loginAssesor')
const createAssessor = require('./createAssessor')
const getAllAssessor = require('./getAllAssessor')


router.get('/all',getAllAssessor)
router.post('/login',login_user)
router.post('/',createAssessor)

module.exports = router