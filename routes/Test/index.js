const express = require("express");
const createTest = require("./createTest");
const deleteTest = require("./deleteTest");
const editTests = require("./editTest");
const getTestById = require("./getTestById");
const router = express.Router();

router.post('/',createTest)
router.patch('/:id',editTests)
router.get('/:id',getTestById)
router.delete('/:id',deleteTest)

module.exports = router
