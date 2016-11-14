<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# Modules in Node.js
##  How to use modules in Node.js

<div class="signature">
    <p class="signature-course">Web applications with Node.js</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->

# Table of Contents

- Modules in Node.js
- Loading modules
- Creating modules
- Using third-party modules

<!-- section start -->

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- # Modules in Node.js -->

<!-- attr: {style: 'font-size: 0.9em'} -->
# Modules in Node.js

- Modules in Node.js are the different parts of application
  - Something like classes in C# and Java
- Modules split the code of an application into different, smaller pieces
- Modules are loaded using the built-in `require(path_to_module)` function
  - Return as a result the functionality the module provides
- Built-in modules are loaded just by their name
  - i.e. `require("fs")`, `require("http")`, etc...

<!-- attr: {style: "font-size: 0.9em"}  -->
# Modules in Node.js: Example

- _Example:_ reading the contents of a file

```js
var fs = require("fs");
var fileContents = fs.readFileSync("./app.js", "utf8");
console.log(fileContents);
```

- _Example:_ Creating an HTTP GET request

```js
var http = require("http");
var options = { /* ... */ };
http.get(options, function(res) {
    console.log(`Status Code: ${res.statusCode}`);
    res.on("data", function(chunk) {
        console.log(chunk);
    });
}).on("error", function(e) {
    console.error(e.message);
});
```

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- # Loading Modules -->
##[Demo](./demos/1. loading-modules)

# Creating Modules

- To create a new module just create a new file
  - In Node.js each file is a different module
  - Each module has its local scope
    - i.e. when `var b = 5;`, `b` will be accessible only from the code in this file
    - The global scope (shared) scope is accessible through the `global` built-in object
- When we want to provide functionality or data from our module to other modules we need to export it
  - Done by the `module` object

<!-- attr: {style: 'font-size: 0.8em'} -->
# Creating Modules: Examples

- _Example:_ create a module for calculations

  - File `math-operations.js`

    ```js
    module.exports.sum = function (...args){/* code... */};
    module.exports.multiply = function (...args){/* code... */};
    ```

  - File `app.js`

    ```js
    var operations = require("./math-operations");
    console.log(`Sum: ${operations.sum(1, 2)}`);
    console.log(`Product: ${operations.multiply(1, 2)}`);  
    ```

-   The name of the module is its file path
  - Absolute or relative
  - `.js` extension can be skipped

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
<!-- # Creating Modules -->
##[Demo](./demos/2. creating-modules)

<!-- section start -->

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
# Using Third-party Modules
##  Using NPM

# Using Third-party Modules

- Third-party modules are installed with [npm](http://)
  - 3 ways to install a module
    1.  `$ npm install lowdb`
        - Installs the module in the current directory
    2.  `$ npm install lowdb --save`
      - Installs the module in the current directory and adds a dependency in `package.json`
      - `$  npm init` must be executed first
      - Can be restored with `$ npm install`
    3.  `$ npm install http-server -g`
      - Installs the module globally and it is accessible through all Node.js applications and CLI

<!-- attr: {class: 'slide-section', showInPresentation: true} -->
# Using Third-party Modules
##[Demo](./demos/3. third-part-modules)

<!-- section start -->
<!-- attr: { id:'questions', class:'slide-section' } -->
# Questions
## Modules in Node.js
[link to the forum](http://telerikacademy.com/Forum/Category/60/end-to-end-javascript-applications)
