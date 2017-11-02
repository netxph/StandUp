var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

function Server(port, router) {

	this.port = port;

	this.router = router;

	this.start = function() {
		
		var app = express();

        //parsers
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(methodOverride());

        //routes
        app.use(express.static('./public'));
		app.use('/api', this.router);
		

		app.listen(port, function() {
			console.log('Server started at port ' + port + '.');
		});
	};
}

module.exports = Server;
