var express = require('express');
var ctrl = require('./server/controllers/standup.server.controller.js');

var router = express.Router();

//routes

router.post('/standup', ctrl.create);

module.exports = router;
