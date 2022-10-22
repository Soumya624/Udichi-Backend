const express = require("express");
const addAttemptsToGroup = require("./addAttemptsToGroup");
const checkAttemptGroup = require("./checkAttemptsGroup");
const router = express.Router();

const createAttempts = require("./createAttempts");
const createAttemptsGroup = require("./createAttemptsGroup");
const editAttempts = require("./editAttempts");
const editAttemptsGroup = require("./editAttemptsGroup");

router.get("/group/:candidate/:test", checkAttemptGroup);
router.patch("/groups/:id",editAttemptsGroup)
router.patch("/add/:id",addAttemptsToGroup)
router.patch("/:id",editAttempts)
router.post("/", createAttempts);
router.post("/create-group", createAttemptsGroup);

module.exports = router;
