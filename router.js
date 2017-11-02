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

router.use(function(err, req, res, next) {
    console.error(err);
    next(err);
});

router.use(function(err, req, res, next) {
    if(req.xhr) {
        res.status(500).json({ error: "Server exception occurred." });
    } else {
        next(err);
    }
});

router.use(function(err, req, res, next) {
    res.status(err.statusCode || 500).json({ error: err });
});

module.exports = router;
