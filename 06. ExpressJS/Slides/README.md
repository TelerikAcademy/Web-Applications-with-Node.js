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
  - Custom middlewares
    - **Application-level** middlewares
    - **Route-level** middlewares
  - Useful third-party middlewares
    - `passport` for authentication
    - `body-parser` for parsing JSON
- Requests and responses
  - The **request** object
  - The **response** object
  - Response types
    - Views
    - String
    - JSON
- **Routes** and **Routers**
- `app.route()`
- `express.Router()`
- Types of Routes
  - Views (Templates)
  - Plain string
  - Pattern

<!-- section start -->

# ExpressJS Overview

- Express is a **minimal** and **flexible** Node.js **web application framework**
  - Provides a robust set of features for **web and mobile applications**
  - The most usable web application framework for Node.js
  - Like ASP.NET for .NET, SprintMVC for Java, Django for Python, etc...
- Express features
  - Can create both **regular web applications and SPA apps**
  - Easy and fluent way to **create RESTful APIs**
  - A lot of plugins
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
  4.  Install ExpressJS with `--save` attribute: `$ npm install --save express`
  5.  Write code and run:

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

# ExpressJS 101 application
##  [Demo](http://)

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

# Simple Routes
##  [Demo](http://)

<!-- section start -->

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

#   The Response Object:

- The response object can refine the response of the HTTP request:
  - Set the status of the response with `res.status(VALUE)`
    - The default is 200 (OK)
  - Set the content and type of the response:

  - `res.json(obj)` returns the object parsed in JSON
  - `res.render(VIEW_NAME, MODEL)` renders the view with name `VIEW_NAME` and passes to it the `MODEL` object
    - More about views later
  - `res.send(STRING_VALUE)` returns a plain string to the client
  - `res.redirect(URL_TO_REDIRECT_TO)` creates a HTTP Request at endpoint URL_TO_REDIRECT_TO

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

- _Example:_ Creating an API for adding and retrieving messages:

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

- Surprisingly this will not work
  - By default express does not know how to parse the body of the request
  - We must use a middleware here: `body-parser`;
  - Just add a `let bodyParser = require('body-parser');` at the top
    - And `app.use(bodyParser.json());` before all routes

# The Request and Response Objects
##  [Demo](http://)

<!-- section start -->

# ExpressJS Middlewares
## Custom and ready-to-use

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

# How to Use Middlewares?

- Every ExpressJS application has a `use()` method that enables the usage of Middlewares
  - `app.use()` accepts a callback function that is execute before each request
    - Or before specific routes
- _Example:_ Middleware before each request (route):

```javascript
app.use(function(req, res, next){
  console.log('Before each request');
  next();
});

//the routes
```

_Example:_ Middleware before a specific route:

```javascript
app.use('/api/messages', function(req, res, next){
  req.query.page = req.query.page || DEFAULT_PAGE;
  req.query.size = req.query.size || DEFAULT_SIZE;
});
```

# Using Custom Middlewares
##  [Demo](http://)

<!-- section start -->

# Using ready-to-use Middlewares
##  Don't reinvent the wheel

# Using ready-to-use Middlewares

- There are a lot of ready-to-use middlewares
- Some, but not all are:
  - [passport](http://passportjs.org/) for authentication
  - [body-parser](https://github.com/expressjs/body-parser) for parsing the body of the request from urlencoded or json to JavaScript object
  - [cookie-parser](https://github.com/expressjs/cookie-parser) for using the cookies
  - [cors](https://github.com/expressjs/cors) for **C**ross-**o**rigin **R**esource **S**haring
  - And more

# Ready-to-use Middlewares
##  [Demo](http://)

<!-- section start -->

# Routes and Routers

<!-- section start -->
<!-- attr: { id:'questions', class:'slide-section' } -->
# Questions
## ExpressJS
[link to Telerik Academy Forum](http://telerikacademy.com/Forum/Category/12/telerik-school-academy)
