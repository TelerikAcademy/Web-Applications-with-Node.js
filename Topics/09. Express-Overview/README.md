<!-- section start -->
<!-- attr: { id:'', class:'slide-title', showInPresentation:true, hasScriptWrapper:true } -->

# ExpressJS
## Web development with ExpressJS

<article class="signature">
	<p class="signature-course">Web applications with JavaScript</p>
	<p class="signature-initiative">Telerik Software Academy</p>
	<a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</article>

<!-- attr: { id:'', showInPresentation:true, hasScriptWrapper:true } -->
# Table of Contents
- Express Overview
  - Routes
  - Middlewares
  - Views
  - Working with Data

<!-- section start -->
<!-- attr: { showInPresentation:true, hasScriptWrapper:true, style: "font-size: 0.9em" } -->
# Express

- Express is a framework for creating web applications with Node.js
  - Like the ASP.NET to C#, Spring MVC to Java, etc...
  - Runs a web server
    - The web server handles requests and sends responses
- Supports middlewares
  - To do stuff before and after each request
  - Has built-in and third-party
  - You can write your own
- Supports lots of view engines
  - Pug being the preferred

<!-- attr: { showInPresentation:true, hasScriptWrapper:true, style: "font-size: 0.9em" } -->
# Running an Express App

- To run an application with Express:
  1.  `$ npm install --save express`
  2.  Initialize your `app.js`
    ```js
    const express = require("express");

    let app = express();

    app.get("/", (req, res) => {
        res.send("It works!");
    });

    app.listen(3000, () => console.log(`App running at :3000`));
    ```
  3.  `$ node app.js`

<!-- attr: {class: 'slide-section'} -->
# Running 101 Express App
## [Demo](http://)

<!-- section start -->

<!-- attr: {style: "font-size: 0.9em"} -->
# Routes in Express

- Express is a web development framework
  - It must support a way to define/create different pages
    - i.e. a way for the user to request different page
    - Also called routes

- Express supports the `4` most used routes:
  - `app.get(url, cb)`
  - `app.post(url, cb)`
  - `app.put(url, cb)`
  - `app.delete(url, cb)`

# Routes in Express

- Routes in express have `2` parameters:
  - `url` - a relative path to the resource/page
  - `callback` - function, called when the route is reached:
    - The callback takes `2` parameters
      - `request` - holds information about the request
        - headers, agent, body, etc...
      - `response` - used to return a response to the client
        - body, headers, cookies, etc...

# Routes in Express

- A `GET` route with Express

```js
app.get('/', (request, response) => {
  //  1.  handle the request from the server
  console.log(request.headers);
  //  2.  return a response
  response.send("It works!");
  //    response.render("index", model);
  //    response.sendfile(pathToFile);  
});
```

<!-- attr: {style: "font-size:0.8em"} -->
#   Routes in Express: _Example_

- Create an application, that has three routes:
  - Get all superheroes
  - Get details about a superhero
  - Add a new superhero

  ```js
  app.get("/", (req, res) => {
    res.send(superheroes);
  });

  app.get("/:id", (req, res) => {
    res.send(superheroes[req.params.id]);
  });

  app.post("/", (req, res) => {
    let superhero = req.body;
    superhero.id = superheroes.length;
    superheroes.push(superhero)
    res.send(superhero);
  });
  ```

<!-- attr: {class: "slide-section"} -->
# Routes in Express
##  [Demo](http://)

<!-- section start -->

<!-- attr: {class: "slide-section"} -->
# Express with Pug
##  Generating views out-of-the-box

# Express with Pug

- Express has built-in support for some view engines
  - Including [Pug](https://github.com/pugjs/pug)
- Just set the `view engine` setting and use `res.render(pathToView)`:

```js
app.set("view engine", "pug");
app.get("/",(req, res) => {
  res.render("superheroes-list", superheroes);
});
```

<!-- section start -->

<!-- attr: {class: "slide-section"}  -->
# Middlewares in Express
##  Extending Express

# Middlewares in Express

- Middleware is a callback that is executed "between" other executions
  - i.e. a function that is executed before each request
- How to attach a middleware?

  ```js
    app.use((req, res, done) => {
      //  do your stuff here
      done();
    });
  ```

  - Mandatory call `done()` at the end, otherwise the request will not continue and will timeout

# Middlewares in Express

- There are many built-in and third-party middlewares
  - [Morgan](https://github.com/expressjs/morgan)
    - A logging middleware

      ```js
      app.use(morgan('combined'));
      ```

  - Express.static
    - Servers static files (css, js, imgs, etc)

      ```js
      app.use("static", express.static(pathToDirWithStaticFiles));
      ```

<!-- attr: {class: "slide-section"} -->
# Middlewares in Express
##  [Demo](http://)

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
# Express
## Questions?
## http://academy.telerik.com
