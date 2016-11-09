
<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Introduction to NodeJS
- What is the fuzz all about?
- Telerik Software Academy
- http://academy.telerik.com
- End-to-end JavaScript Applications


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Table of Contents
- Overview of NodeJS
  - Building and installing NodeJS
  - Developing IDEs
  - What is the Event Loop?
  - Writing code with callbacks
- Modules
  - Using modules
  - Installing modules
- &lt;number&gt;


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Overview of NodeJS


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Overview of NodeJS
- Background
- 


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Why NodeJS
- Node is written in JavaScript
  - One language on the server and the client
- Full control of the server
- Asynchronous and fast (callback oriented)
- 


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Building Blocks &amp; Installation
- NodeJS
  - libuv– high-performance event I/O library
  - V8– Google Chrome&apos;s JavaScript engine
  - JavaScript-&gt;C++
- Installation
  - http://nodejs.org/
  - Run Command Prompt (cmd)
  - Type &quot;node&quot; and run it


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Developing IDEs
- IDEs
  - JetBrainsWebStorm
  - Sublime Text 2/3
  - Cloud9
  - Visual Studio Code
  - Atom
  - Pretty much any decent JS IDE


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- The Event Loop


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- The Event Loop


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Asynchronous Code
- Standard way
- 
- 
- Callback approach
- var conn = getDbConnection(connectionString);
- var stmt = conn.createStatement();
- var results = stmt.executeQuery(sqlQuery);
- for (var i=0; i&lt;results.length; i++) {
- // print results[i];
- }
- getDbConnection(connectionString, function(err, conn) {
- conn.createStatement(function(err, stmt) {
- var results = stmt.executeQuery(sqlQuery);
- results.on(‘row’, function(result) {
- // print result
- });
- });
- });


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Asynchronous Code
- Convention
  - Callback is last parameter in the async call
  - Error is first parameter in the callback
- var handleResults = function(error, results) {
- // if error is undefined…
- // do something with the results
- }
- 
- getStuff(inputParam, handleResults);


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Asynchronous Code
- For simple uses – anonymous function
- 
- 
- Closures are your friend
- 
- 
- 
- Do not overuse!
- getStuff(inputParam, function(error, results) {
- // if error is undefined…
- // do something with the results
- });
- someOtherFunction(function(err, stuffToGet) {
- var foo = 23;
- getStuff(stuffToGet, function(error, results) {
- // if error is undefined…
- // do something with the results   (and foo)
- });
- });


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Asynchronous Code
- Live Demo


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Using Modules


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Using Modules
- Modules are used with &quot;require&quot;
- var first = require(&apos;first&apos;);
- var Second = require(&apos;second&apos;);
- var justPart = require(&apos;largeModule&apos;).justPart;
- 
- var propertyResult = 2 + first.property; // export variable
- var functionResult = first.function() * 3; // export function
- 
- var second = new Second(); // export object
- 
- console.log(justPart()); // export part of object


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Built-in Modules
- Built-in modules
  - Come with Node
  - Are&quot;require&quot;-edwith string identifier

- Commonly used modules
  - fs, http, crypto, os
  - More athttp://nodejs.org/api/

- var fs = require(&apos;fs&apos;);


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Built-in Modules
- Live Demo


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Your Modules
- Each .js file is a different module
  - Are&quot;require&quot;-edwith file system semantics
  - &quot;.js&quot; is not needed in the string
- var data = require(&apos;./data&apos;); // in same directory
- var a = require(&apos;./other/a&apos;); // in child directory
- var b = require(&apos;../lib/b&apos;); // in parent directory&apos;s child
- var justPart = require(‘./data’).part; // just part of module


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Your Modules
- Variable are exported withmodule.exports
- // first.js
- 
- var count = 2;
- var doIt = function(i, callback) { … }
- module.exports.doIt = doIt;
- module.exports.someVar = &apos;result&apos;;
- // second.js
- 
- var one = require(&apos;./first&apos;);
- one.doIt(23, function (err, result) {
- console.log(result);
- });
- console.log(one.someVar);
- console.log(one.count); // invalid


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Your Modules
- Live Demo


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Third-Party Modules
- Third-Party Modules
  - Installed from Node Package Manager (NPM)
  - Command:&quot;npm installmdl_name&quot;
  - Are&quot;require&quot;-edwith string identifier

- Some modules have command line tools
- Command:&quot;npm install –gmdl_name&quot;
  - Example: Express, Mocha

- var request = require(&apos;request&apos;);


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Third-Party Modules
- Live Demo


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Resources
- http://nodejs.org/- NodeJS official web site
- http://nodejs.org/api/- API documentation
- http://blog.nodejitsu.com/npm-cheatsheet- NPM documentation
- https://npmjs.org/- NPM official web site
- https://github.com/felixge/node-style-guide- NodeJS style guide
- 


<!-- attr: { hasScriptWrapper:true, showInPresentation:true } -->
- Introduction to NodeJS
- http://academy.telerik.com

