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
