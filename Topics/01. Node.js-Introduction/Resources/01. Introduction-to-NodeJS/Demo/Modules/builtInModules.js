var fs = require('fs');
var http = require('http');

fs.readFile('builtInModules.js', 'utf8',
    function(error, fileText) {
        if (error) {
            console.log('File cannot be read: ' + error);
            return;
        }

        console.log(fileText);
    });

http.createServer(function (request, response) {
    response.writeHead(200);
    response.write('Zdrasti!');
    response.end();
}).listen(1234);

console.log('Server running on port 1234...')

