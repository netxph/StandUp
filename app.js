var Server = require('./server.js');
var router = require('./router.js');

var app = new Server(3000, router);

app.start();
