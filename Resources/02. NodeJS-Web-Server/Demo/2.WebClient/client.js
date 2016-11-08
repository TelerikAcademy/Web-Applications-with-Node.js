var http = require('http');

var port = 1234;

http.createServer(function(req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/plain' // ;charset=utf-8
    });

    http.get('http://telerikacademy.com', function(academyResponse) {

        var body = '';
        academyResponse.on('data', function(data) {
            body += data;
        })

        academyResponse.on('end', function() {
            res.write(body, 'utf8');
            res.end();
        })
    })

}).listen(port);

console.log('Server running on port ' + port);
