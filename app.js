var Server = require('./server.js');
var router = require('./router.js');
var logger = require('./logger.js');
var mongoose = require('mongoose');

//database
var options = {
    keepAlive: 1, 
    useMongoClient: true 
};

mongoose.connect('mongodb://localhost/standup', options);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    logger.info('Database connection successful.');
});

//server
var app = new Server(3000, router);

app.start();
