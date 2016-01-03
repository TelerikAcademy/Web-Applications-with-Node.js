var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'Set-Cookie': ['type=ninja', 'language=javascript']
    }); //return success header

    if (req.url === '/login') {
        res.write('Login page!'); //response
    }
    else {
        res.write('404 not found!');
    }

    res.write('<br />Copyright &copy;');
    res.write('Telerik Academy');

    res.end(); // finish processing current request
}).listen(1234);

console.log('Server is running on port ' + 1234);
