var http = require ('http');

var server = http.createServer(
	function(request, response) {
		response.write('Oi Andreia.');
		response.end();
	}
);

server.listen(3000, 'programacao-web.local');