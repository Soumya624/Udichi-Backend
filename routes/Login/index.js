const express = require("express");
const login_user = require("./loginUser");
const router = express.Router();


router.post('/',login_user);

module.exports = router