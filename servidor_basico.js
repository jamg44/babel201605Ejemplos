
// cargar libreria de node http
var http = require('http');

// crear un servidor
var server = http.createServer(function( request, response) {
    //response.writeHead(200, {'Content-Type': 'text/plain'});
    response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});

    response.end('<h1>Wake up, <b>Neo</b>...</h1>');
});

// arrancar el servidor
server.listen(1337, '127.0.0.1');
console.log('Servidor arrancado en http://127.0.0.1:1337');
