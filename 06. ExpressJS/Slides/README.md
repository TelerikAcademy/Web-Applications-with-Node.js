<!-- section start -->
<!-- attr: { class:'slide-title', hasScriptWrapper:true } -->
# ExpressJS
<div class="signature">
    <p class="signature-course">End-to-end JavaScript Applications</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->

# Table of Contents

- Express Overview
  - App initialization
  - Simple routes
- **Middlewares**
  - What is a Middleware?
  - Using middlewares
- Requests and responses
  - Response types
    - Views, String, JSON
- **Routes** and **Routers**
- Types of Routes

<!-- section start -->

# ExpressJS Overview

- Express is a **minimal** and **flexible** Node.js **web application framework**
  - Provides a robust set of features for **web and mobile applications**
  - The most usable web application framework for Node.js
  - Like ASP.NET for .NET, SprintMVC for Java, Django for Python, etc...

# ExpressJS Overview
- Express features
  - Can create both **regular web applications and SPA apps**
  - Easy and fluent way to **create RESTful APIs**
- Lots of plugins
  - Some are
    - Authentication (`Passport.js`)
    - Parsing HTTP Requests/Responses (`body-parser`, `cookie-parser`)
    - Dynamic views (`Jade`, `Handlebars`)
    - Dynamic styles (`Stylus`, `Less`)
    - And many more

<!-- attr: {hasScriptWrapper: true} -->
# How to use ExpressJS?

- Express is per-application package
  - No reason to install it globally
- Steps to create an Express application:
  1.  Open a terminal/CMD window
  2.  Navigate to a empty folder
  3.  Initialize a Node.js application: `$ npm init`
  4.  Install ExpressJS with `--save` attribute:

    ```bash
    $ npm install --save express
    ```

  5.  Write code and run:

<!-- attr: {style: 'font-size:0.9em'} -->
# Initializing ExpressJS Application?

- Run an ExpressJS application:

```javascript
//app.js
'use strict';

//load express
let express = require('express');

//create an Express application
let app = express();

//set the port on which the server application be running
let port = 3001;

//run the app
let server = app.listen(port, function () {
  let host = server.address().address(),
    port = server.address().port;
    console.log(`Server is running at ${host}:${port}`)
});
```

<!-- attr: {class: 'slide-section'} -->
# ExpressJS 101 Application
##  [Demo](http://)

<!-- attr: {style: 'font-size:0.9em'} -->
# Simple Routes

- The above application does nothing
  - It just runs the application and that is
  - Yet, routes can be set
- Routes in ExpressJS consist of:
  - An **HTTP verbs** - `GET`, `POST`, `PUT`, `DELETE`, etc
  - The endpoint of the route - '/users', 'posts', etc...
  - Callback that is executed when the route is reached
    - i.e. when a client creates an HTTP request at the **same endpoint** with the **same verb**
- _Example:_ Creating a single get endpoint:

```javascript
app.get('/artists', function(req, res) {
  res.send('It works!');
});
```

<!-- attr: {class: 'slide-section'} -->
# Simple Routes
##  [Demo](http://)

<!-- section start -->

<!-- attr: {class: 'slide-section'} -->
# Request and Response Objects
##  Of Routes in ExpressJS

# Request and Response Objects

- A route in ExpressJS consists of a HTTP verb, endpoint string and callback
- The callback always accepts **2 parameters**:
  - The **request** object
    - Contains info about the Request:
      - Headers, request body, query parameters, origin, etc...
    - Called `req` 99% of the time
  - The **response** object
    - Has methods for refining the response to the client
      - Status code, response body, headers, etc...
    - Called `res` 99% of the time

<!-- attr: {style: '0.7em'} -->
#   The Response Object:

- The response object can:
  - Set the status of the response with `res.status(VALUE)`
  - `res.json(obj)` returns JSON
  - `res.render(VIEW_NAME, MODEL)` renders the view with name `VIEW_NAME` and passes to it the `MODEL` object
  - `res.send(STRING_VALUE)` returns a string
  - `res.redirect(URL_TO_REDIRECT_TO)` creates a HTTP Request at endpoint `URL_TO_REDIRECT_TO`

# The Response Object Examples

- _Example:_ creating GET endpoint to return messages:

```javascript
let messages = [];

app.get('/api/messages', function(req, res){
  res.json({
    result: messages
  });
});
```

# The Request Objects

- The requests object provides information and data from the HTTP request:
  - `req.body` - the body
  - `req.headers` - the headers
  - `req.query` - the query parameters

# The Request Objects

- _Example:_ paging with query parameters:

```javascript
const DEFAULT_PAGE = 1,
    DEFAULT_SIZE = 10;
let messages = [/* many messages */];
app.get('/api/messages', function(req, res){
  let page = (req.query.page || DEFAULT_PAGE) - 1;
  let size = +(req.query.size || DEFAULT_SIZE);
  let index = page * size;
  let selectedMessages = messages.slice(index, size);
  res.json({
    result: selectedMessages
  });
});
```

# Request and Response Objects Example

- _Example:_ Creating a GET request for retrieving messages:

```javascript
let idGenerator = require('./utils/id-generator')();
let messages = [];

app.get('/api/messages', function (req, res){
  let page = (req.query.page || DEFAULT_PAGE) - 1,
      size = +(req.query.size || DEFAULT_SIZE);
  res.json({
    result: messages.slice(page*size, size)
  });
});

```

# Request and Response Objects Example

- _Example:_ Creating a GET request for retrieving messages:

```
app.post('/api/messages', function (req, res){
  let newMessage = req.body;

  //Some validation is in place...

  newMessage.id = idGenerator.next();
  messages.push(newMessage);

  res.status(201)
    .json({
      result: newMessage
    });
});
```

# Request and Response Objects Example

- Surprisingly this will not work
  - By default express does not know how to parse the body of the request
  - We must use a middleware here: `body-parser`;
  - Just add a `let bodyParser = require('body-parser');` at the top
    - And `app.use(bodyParser.json());` before all routes

<!-- attr: {class: 'slide-section'} -->
# The Request and Response Objects
##  [Demo](http://)

<!-- section start -->

<!-- attr: {class: 'slide-section'} -->
# ExpressJS Middlewares
##  Custom and ready-to-use

# ExpressJS Middlewares

- What is a middleware?
  - A middleware is some functionality that is executed:
    - After the request of the client
    - Before the call to route callback
- Middlewares can be useful for:
  - Cross-origin resource sharing (CORS)
  - Request body parsing
  - Cookie parsing
  - And more

# Using Middlewares

- Every ExpressJS application has a `use()` method that enables the usage of Middlewares
  - `app.use()` accepts a callback function that is execute before each request
    - Or before specific routes
# Using Middlewares

- _Example:_ Middleware before **each router**:

```javascript
app.use(function(req, res, next){
  console.log('Before each request');
  next();
});

//the routes
```

_Example:_ Middleware before a **specific route**:

```javascript
app.use('/api/messages', function(req, res, next){
  req.query.page = req.query.page || DEFAULT_PAGE;
  req.query.size = req.query.size || DEFAULT_SIZE;
});
```

<!-- attr: {class: 'slide-section'} -->
# Using Custom Middlewares
##  [Demo](http://)

<!-- section start -->

<!-- attr: {class: 'slide-section'} -->
# Using ready-to-use Middlewares
##  Don't reinvent the wheel

# Using ready-to-use Middlewares

- There are a lot of ready-to-use middlewares
- Some, but not all are:
  - [passport](http://passportjs.org/) for authentication
  - [body-parser](https://github.com/expressjs/body-parser) for parsing the body of the request from urlencoded or json to JavaScript object
  - [cookie-parser](https://github.com/expressjs/cookie-parser) for using the cookies
  - [cors](https://github.com/expressjs/cors) for Cross-origin Resource Sharing
  - And more

<!-- attr: {class: 'slide-section'} -->
# Ready-to-use Middlewares
##  [Demo](http://)

<!-- section start -->

<!-- attr: {class: 'slide-section'} -->
# Service Static Resources
##  HTML, CSS, images, JS files

# Serving Static Resources

- ExpressJS can serve static resources
  - HTML, CSS, images, video, SVGs
  - JavaScript files for the client
  - etc...
- How?
  - With a ready-to-use plugin built-in in ExpressJS

# Serving Static Resources

- _Example:_ serves the contents of the **public** folder at the **root** of the server

```javascript
let staticPath = path.join(__dirname, '/public');
app.use(express.static(staticPath));
```

- _Example:_ serves the contents of the **public** folder at **endpoint** '/public'

```javascript
let staticPath = path.join(__dirname, '/public');
app.use('public', express.static(staticPath));
```

<!-- attr: {class: 'slide-section'} -->
# Serving Static Resources
##  [Demo](http://)

<!-- section start -->

<!-- attr: {class: 'slide-section'} -->
# Routes and Routers
##  Ways to control our routes

# Routes and Routers

- ExpressJS provides many ways of registering endpoints (routes)
  - Route per **HTTP verb**
    - i.e. `app.get(X, ..)`, `app.post(X, )`, etc...
  - Route for **group of verbs**
    - i.e. a single route for many verbs`get()`, `post()`, etc..
  - Routers for **group of verbs** with a **custom prefix**

# Route per verb

- Route per verb is the most basic way to define routes:

```javascript
app.get('/api/posts', ...);
app.post('/api/posts', ...);
app.put('/api/posts', ...);
```

- This is OK
  - Yet, if we create a RESTful API, it leads to lots of repeat endpoints

<!-- attr: {class: 'slide-section'} -->
# Routes per verb
##  [Demo](http://)

<!-- attr: {style: 'font-size: 0.93em'} -->
# Routes for a group of verbs

- Allows the grouping of many verbs at the same route:

```javascript
app.route('/api/messages')
  .get(function(req, req){})
  .post(function(req, res){})
```

- Easier than explicitly registering each route
  - Yet, cannot define routes with repeating verb:
  - The following routes cannot be registered with a single `app.route()`

  ```url
  GET /api/messages
  GET /api/messges/MESSAGE_ID
  ```

<!-- attr: {class: 'slide-section'} -->
# Using `app.route()`
##  [Demo](http://)

# Using express.Router

- Allows the grouping of many verbs at the same route
  - Also allows registering of multiple verbs at this route
  - Can use Middlewares
- _Example:_ Routers

```javascript
let router = new express.Router();
router.get('/', function(){})
      .get('/:id', function(){})
      .post('/', function () {});

app.use('/api/messages', router);
```

<!-- attr: {class: 'slide-section'} -->
# Using Routers
##  [Demo](http://)

<!-- section start -->

<!-- attr: {class: 'slide-section'} -->
# Using View Engines with ExpressJS
##  Automatically parse views with models

# Using View Engines with ExpressJS

- To use view engines in ExpressJS:
  1.  Install View Engine

    ```bash
    $ npm install --save jade
    ```

  2.  Set the view engine of the app:

    ```bash
    app.set('view engine', 'jade')
    ```

  3.  Create a folder `views` and put the jade views there
  4.  Create routes that show these views


<!-- attr: {class: 'slide-section'} -->
# Using View Engines with ExpressJS
##  [Demo](http://)

<!-- section start -->

<!-- attr: { id:'questions', class:'slide-section' } -->
# Questions
## ExpressJS
[link to Telerik Academy Forum](http://telerikacademy.com/Forum/Category/60/end-to-end-javascript-applications)
