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

# Modules in Node.js

- Modules in Node.js are the different parts of application
  - Something like classes in C# and Java
- With modules the code of an application can be split into different, smaller pieces of code
- Node.js loads modules using the built-in `require(path_to_module)` function
  - Return as a result the functionality the module provides
- Built-in modules are loaded just by their name
  - i.e. `require("fs")`, `require("http")`, etc...

- _Example:_

```js
var fs = require("fs");
var fileContents = fs.readFileSync("./app.js", "utf8");
console.log(fileContents);
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

# Creating Modules

- _Example:_ create a module for simple calculations

  - File `math-operations.js`

    ```js
    function sum(...args) { /* the code ... */ }
    function multiply(...args) { /* the code ... */ }
    module.exports.sum = sum;
    module.exports.multiply = multiply;
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

# Using Third-party Modules
##  Using NPM

# Using Third-party Modules

- Third-party modules must be installed first with [npm](http://)
  - 3 ways to install a module
    1.  `$ npm install lowdb`
      - Installs the module in the current directory
    2.  `$ npm install lowdb --save`
    - Installs the module in the current directory and adds a dependency in `package.json`
    - `$  npm init` must be executed first
    - Can be restored with `$ npm install`
    3.  `$ npm install http-server -g`
    - Installs the module globally and it is accessible through all Node.js applications and CLI

# Using Third-party Modules
##[Demo](./demos/3. third-part-modules)
