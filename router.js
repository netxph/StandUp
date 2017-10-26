var express = require('express');
var ctrl = require('./server/controllers/standup.server.controller.js');

var router = express.Router();

//routes

router.post('/standup', ctrl.create);
router.get('/standup/:id', ctrl.getById);
router.get('/standup', ctrl.getAll);
router.put('/standup/:id', ctrl.update);
router.patch('/standup/:id', ctrl.update);
router.delete('/standup/:id', ctrl.delete);

module.exports = router;
