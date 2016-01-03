var connect = require('connect'),
    util = require('util');

var interceptorFunction = function (request, response, next) {
    console.log(util.format('Request for %s with method %s', request.url, request.method));
    next();
};

var app = connect()
    // .use('/log', interceptorFunction)
    .use(interceptorFunction)
    .use(function onRequest(request, response) {
        response.end('Hello from Connect!');
    }).listen(3001);
