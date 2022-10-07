const express = require("express");
const router = express.Router();

const getOptionById = require("./getOptionsById");
const createOptions = require('./createOptions')
const editOptions = require('./editOptions')
const deleteOptions = require('./deleteOptions')


router.post('/',createOptions)
router.get('/:id',getOptionById)
router.patch('/:id',editOptions)
router.delete('/:id',deleteOptions)

module.exports = router