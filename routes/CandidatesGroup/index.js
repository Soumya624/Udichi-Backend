const express = require('express')
const createCandidateGroup = require('./createCandidateGroup')
const deleteCandidateGroup = require('./deleteCandidateGroup')
const editCandidateGroup = require('./editCandidateGroup')
const getAllCandidatesGroups = require('./getAllCandidatesGroup')
const getCandidateGroupById = require('./getCandidateGroupById')
const router = express.Router()

router.post('/',createCandidateGroup)
router.patch('/:id',editCandidateGroup)
router.get('/all',getAllCandidatesGroups)
router.get('/:id',getCandidateGroupById)
router.delete('/:id',deleteCandidateGroup)

module.exports = router