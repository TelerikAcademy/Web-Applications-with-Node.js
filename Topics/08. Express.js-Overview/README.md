<!-- section start -->
<!-- attr: { id:'', class:'slide-title', showInPresentation:true, hasScriptWrapper:true } -->
# ExpressJS
## Web development with ExpressJS
<!-- <img class="slide-image" showInPresentation="true" src="imgs\pic00.png" style="top:50.80%; left:58.22%; width:34.33%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs\pic01.png" style="top:17.98%; left:3.56%; width:59.60%; z-index:-1" /> -->
<article class="signature">
	<p class="signature-course">End-to-end JavaScript Applications</p>
	<p class="signature-initiative">Telerik Software Academy</p>
	<a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</article>




<!-- section start -->
<!-- attr: { id:'', showInPresentation:true, hasScriptWrapper:true } -->
# Table of Contents
- Middleware
- ExpressJS
- Views and layout
- Working with Data
- Common and Advanced Scenarios
<!-- <img class="slide-image" showInPresentation="true" src="imgs\pic02.png" style="top:15.38%; left:72.93%; width:30.91%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# node.js
- Event-Driven, Asynchronous IO, Server-Side JavaScript library in C
- Open Source
- Available on
  - Windows
    - Service
    - Under IIS (iisnode)
  - *nix systems
- As a service
  - Azure
  - Heroku
<!-- <img class="slide-image" showInPresentation="true" src="imgs\pic03.png" style="top:28.14%; left:58.94%; width:39.47%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# NodeJS Web Server
- Basic server implementation

```javascript
var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    }); //return success header

    res.write('My server is running! ^_^'); //response
    res.end(); //finish processing current request
}).listen(1234);
```



<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Middleware for NodeJS
- Connect is a middleware framework for node
  - Built on top of node’s Http Server
  - http://www.senchalabs.org/connect/

```javascript
var connect = require('connect');

var app = connect()
  .use(connect.logger('dev'))
  .use(connect.static('public'))
  .use(function(req, res){
    res.end('hello world\n');
  })

http.createServer(app).listen(3000);
```


```javascript
$ npm install connect
```



<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Connect Middleware
- Request Processing Pipeline
- Response
- Request


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Connect for NodeJS – _Example_
- Custom middleware function for connect

```javascript
var connect = require('connect'),
    util = require('util');

var interceptorFunction = function(request, response, next) {
    console.log(util.format('Request for %s with method %s',        request.url, request.method));
    next();
};

var app = connect()
    // .use('/log', interceptorFunction)
    .use(interceptorFunction)
    .use(function onRequest(request, response) {
        response.end('Hello from Connect!');
    }).listen(3001);
```



<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Express.js 4.0
- Has middleware built-in
- Adds functionality to the normal server
  - Request / Response enhancements
  - Routing
  - View Support
  - HTML Helpers
  - Content Negotiation
<!-- <img class="slide-image" showInPresentation="true" src="imgs\pic04.png" style="top:32.64%; left:52.61%; width:54.45%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Basic Architecture
- Request
- View
- File
- XML
- JSONetc.
- Function
- Routing


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# First Express App

```javascript
var express = require('express');

var app = express();

app.get('/', function (request, response) {
    response.send('Welcome to Express!');
});

app.get('/customer/:id', function (req, res) {    res.send('Customer requested is ' + req.params['id']);
});

app.listen(3000);
```



<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
# Demo: Creating Express Applications
## Simple ExpressJS application and "nodemon"
## Create routes and require() them
## Pass parameters
## Configure middleware
<!-- <img class="slide-image" showInPresentation="true" src="imgs\pic05.png" style="top:6.69%; left:13.23%; width:82.33%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Views in ExpressJS
- User Interface
- Based on Templates
- Support for multiple View Engines
  - Jade, EJS, JSHtml, . . .
- Default is Jade
  - http://jade-lang.com

```javascript
app.get('/', function (req, res) {
    res.render('index');
});
```



<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Views in ExpressJS – _Example_

```javascript
var express = require('express'),
    path = require('path');
var app = express();
app.configure(function () {
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(express.static(path.join(__dirname, 'public')));
});
app.get('/', function (req, res) {
    res.render('empty');
});
app.listen(3000);
```


```javascript
doctype
html(lang="en")
  head
    title Welcome to this emtpy page
  body
```



<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
# Demo: Views in ExpressJS
## Show simple views in ExpressJS
## Jade syntax examples
## Layouts and blocks
## Stylus
<!-- <img class="slide-image" showInPresentation="true" src="imgs\pic06.png" style="top:8.00%; left:30.20%; width:48.88%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Working with Data
- Pass data to the views
- Read data from the views (bodyParser)
- Read and send files
- Data for all views

```javascript
res.render('index', { title: 'Customer List' });
```


```javascript
res.render('index', { title: 'Customer List' });
```


```javascript
var filePath = req.files.picture.path;
// ...
res.download(filePath);
res.sendfile(filePath);
```


```javascript
app.locals.clock = { datetime: new Date().toUTCString()};
```



<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
# Demo: Working with data
## Pass data to views (customer.index)
## Submit data from views (customer.create)
## Content negotiation (customer.details)
## Upload files (customer.create)
## Helpers (app.locals)
<!-- <img class="slide-image" showInPresentation="true" src="imgs\pic07.png" style="top:5.12%; left:34.29%; width:41.07%; z-index:-1" /> -->


<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
# Demo: Advanced Scenarios
## Cookies
## Sessions
## Custom middleware
## Authentication and authorization
<!-- <img class="slide-image" showInPresentation="true" src="imgs\pic08.png" style="top:6.44%; left:33.46%; width:42.73%; z-index:-1" /> -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Next Steps
- Express.js Samples
  - https://github.com/visionmedia/express
- Database Support
  - MS SQL
  - CouchDB
  - PostgreSQL
  - Redis
- Socket.io
  - Real-time support


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->

- Search on npm.org before you re-invent the wheel
- Express is Lightweight Framework and Fast to work with
- Testing is not optional
  - Mocha
- JavaScript can get messy


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# ExpressJS
- http://academy.telerik.com




