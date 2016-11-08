var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    }); //return success header

    res.write(JSON.stringify(http)); //response
    res.end(); //finish processing current request
}).listen(1234);

console.log('Server is running on port ' + 1234)