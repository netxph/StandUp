var express = require('express');

function Server(port, router) {

	this.port = port;

	this.router = router;

	this.start = function() {
		
		var app = express();

        app.use(express.static('./public'));
		app.use('/api', this.router);
		
		app.listen(port, function() {
			console.log('Server started at port ' + port + '.');
		});
	};
}

module.exports = Server;
