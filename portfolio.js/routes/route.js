const express = require("express");
const sendMail = require("../controller/Control.js");
const router = express.Router();
router.post("/sendMail", sendMail);

module.exports = router;
