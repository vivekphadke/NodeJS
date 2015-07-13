var http = require('http');
var s =  http.createServer(function (req, res) {
	res.end('Welcome to getting started');
});
s.listen({port:5000});