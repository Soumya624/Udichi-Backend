const express = require('express')
const router = express.Router()
const login_user = require('./loginProctorer')
const createProctorer = require('./createProctorer')
const getAllProctorer = require('./getAllProctorer')

router.get('/all',getAllProctorer)
router.post('/login',login_user)
router.post('/',createProctorer)

module.exports = router