var mongoose = require('mongoose');

var standupSchema = mongoose.Schema({
    name: String,
    project: String,
    yesterday: String,
    today: String,
    impediment: String,
    createdOn: { type: Date, default: Date.now }
});

var StandUp = mongoose.model('StandUp', standupSchema);

module.exports = StandUp;
