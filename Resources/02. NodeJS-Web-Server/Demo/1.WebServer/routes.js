var http = require('http');
var url = require('url');
var querystring = require('querystring');

http.createServer(function(req, res) {

    res.writeHead(200, {
        'Content-Type': 'text/plain'
    }); //return success header

    var parsedUrl = url.parse(req.url);

    console.log("Path: " + parsedUrl.path);
    console.log("Path name: " + parsedUrl.pathname);
    console.log("Query: " + parsedUrl.query);

    var parsedQuery = querystring.parse(parsedUrl.query);
    if (parsedQuery.search) {
		res.write(parsedQuery.search.toString());
	}

    res.end(); //finish processing current request
}).listen(1234);

console.log('Server is running on port ' + 1234)
