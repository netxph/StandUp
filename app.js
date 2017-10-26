var Server = require('./server.js');
var router = require('./router.js');
var mongoose = require('mongoose');

//database
mongoose.connect('mongodb://localhost/standup', { useMongoClient: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('Database connection successful.');
});

//server
var app = new Server(3000, router);

app.start();
