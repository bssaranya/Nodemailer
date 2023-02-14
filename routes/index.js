var express = require('express');
var router = express.Router();

const mailRouter = require('../api/mail/index');

router.use('/mail', mailRouter);
module.exports = router;
