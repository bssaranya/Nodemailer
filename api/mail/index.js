var express = require('express');
var router = express.Router();

const controller = require('./controller.js');

router.post('/', controller.sendEmail);

module.exports = router;
