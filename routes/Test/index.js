const express = require("express");
const createTest = require("./createTest");
const deleteTest = require("./deleteTest");
const editTests = require("./editTest");
const getAllTests = require("./getAllTests");
const getTestById = require("./getTestById");
const router = express.Router();

router.post('/',createTest)
router.get('/all',getAllTests)
router.patch('/:id',editTests)
router.get('/:id',getTestById)
router.delete('/:id',deleteTest)

module.exports = router
