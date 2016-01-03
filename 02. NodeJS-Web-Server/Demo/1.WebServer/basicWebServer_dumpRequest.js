var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    }); //return success header

	var cache = [];
    res.write(JSON.stringify(req,
		function(key, value) {
			if (typeof value === 'object' && value !== null) {
				if (cache.indexOf(value) !== -1) {
					// Circular reference found, discard key
					return;
				}
				// Store value in our collection
				cache.push(value);
			}
			return value;
		})); //response
    res.end(); //finish processing current request
}).listen(1234);

console.log('Server is running on port ' + 1234);
