var StandUp = require('../models/standup.server.model.js');

//POST /standup
exports.create = function(req, res) {

    var standup = req.body;

    var entry = new StandUp({
        name: standup.name,
        project: standup.project,
        yesterday: standup.yesterday,
        today: standup.today,
        impediment: standup.impediment
    });

    entry.save(function(err, data) {
        if(err) return console.error(err);
    });

    res.status(204).send();
}

//GET /standup/:id
exports.getById = function(req, res) {

    var id = req.params.id;

    StandUp.findById(id, function(err, data) {
        if(err) return console.error(err);

        res.status(200).json(data);
    });

}

//GET /standup
exports.getAll = function(req, res) {

    StandUp.find(function(err, data) {
        if(err) return console.error(err);

        res.status(200).json(data);
    });
}

//PUT /standup/:id
exports.update = function(req, res) {
    
    var id = req.params.id;
    var standup = req.body;

    StandUp.findById(id, function(err, entry) {
        if(err) return console.error(err);

        entry.yesterday = standup.yesterday;
        entry.today = standup.today;
        entry.impediment = standup.impediment;

        entry.save(function(err, data) {
            if(err) return console.error(err);

            res.status(204).send();
        });
    });

}

//DELETE /standup/:id
exports.delete = function(req, res) {
    var id = req.params.id;
    StandUp.findByIdAndRemove(id, function(err, data) {
        if(err) return console.error(err);

        res.status(204).send();
    });
}
