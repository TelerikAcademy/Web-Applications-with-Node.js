<!-- section start -->
<!-- attr: { id:'', class:'slide-title', showInPresentation:true, hasScriptWrapper:true } -->
# Tools for JavaScript Development
## Unleash the Power of JavaScript Tooling
<article class="signature">
	<p class="signature-course">End-to-end JavaScript Applications</p>
	<p class="signature-initiative">Telerik Software Academy</p>
	<a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</article>




<!-- section start -->
<!-- attr: { id:'', showInPresentation:true, hasScriptWrapper:true } -->
# Table of Contents
- Project tools
  - Package Management: NPM & Bower
  - Scaffolding: Yeoman
  - Task Automation: Grunt 




<!-- section start -->
<!-- attr: { id:'', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Project Tools -->
<!-- ## No matter the Editor -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Project Tools
- NPM & Bower
  - Install Node.js packages or client libraries
- Grunt
  - Tasks runner
  - Create different tasks for build/development/test cases
- Yeoman
  - Scaffolding of applications
  - One-line-of-code to create a project template with views/routes/modules/etc…




<!-- section start -->
<!-- attr: { id:'', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Package Management -->
<!-- ## Bower & NPM -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Package Management: NPM
- Node.js Package Management (NPM)
  - Package manager for Node.js modules
  - **$****npm** **init** in CMD (Win) or Terminal (MAC/Linux)
  - Initializes an empty Node.js project with **package.json** file

```javascript
$ npm init
//enter package details
name: "NPM demos"
version: 0.0.1
description: "Demos for the NPM package management"
entry point: main.js
test command: test
git repository: http://github.com/user/repository-name
keywords: npm, package management
author: doncho.minkov@telerik.com
license: BSD-2-Clause
```



<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->

- Installing modules
  - **$****npm****install package-name [--save-****dev****]**
    - Installs a package to the Node.js project
    - **--save-****dev** suffix adds dependency in **package.json**
- $ npm install express --save-dev
- $ npm install jade --save-dev

```javascript
$ npm install
```

- Before running the project
  - **$****npm** **install**
  - Installs all missing packages from package.json




<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Package Management: Bower
- Bower is a package management tool for installing client-side JavaScript libraries
  - Like jQuery, KendoUI, AngularJS, etc…
  - It is a Node.js package and should be installed first

```javascript
$ npm install –g bower
```


```javascript
$ bower init
```



<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->

- Searching for libraries
- $ bower install kendo-ui

```javascript
$ bower search kendo
```

<!-- <img class="slide-image" showInPresentation="true" src="imgs\pic00.png" style="top:15.73%; left:55.41%; width:44.38%; z-index:-1" /> -->
<!-- <img class="slide-image" showInPresentation="true" src="imgs\pic01.png" style="top:40.30%; left:5.52%; width:45.98%; z-index:-1" /> -->






<!-- section start -->
<!-- attr: { id:'', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Grunt -->
<!-- ## Tasks Runner -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Grunt
- Grunt is a Node.js task runner
  - It can runs different tasks, based on configuration
  - Tasks can be:
    - Concat and minify JavaScript/CSS files 
    - Compile SASS/LESS/Stylus
    - Run jshint, csshint
    - Run Unit Tests
    - Deploy to Git, Cloud, etc…
    - And many many more


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->


```javascript


jshint
stylus
csshint
connect
watch
```

- Why use a task runner?
  - Task runners gives us automation, even for different profiles:

```javascript
DEVELOPMENT
```


```javascript


jshint
stylus
csshint
mocha
```


```javascript
TEST
```


```javascript


jshint
stylus
csshint
concat
uglify
copy
usemin
```


```javascript
BUILD
```



<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Configuring Grunt
- To configure grunt, create a **Gruntfile.js** file in the root directory of your application
  - It is plain-old Node.js
  - Grunt is configured programmatically
  - Create an module that exports a single function with one parameter – the grunt object
- module.exports = function (grunt) {
-   //configure grunt
- };


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->

- All the configuration is done inside the module
  - First execute the **grunt.initConfig****()** method and pass it the configuration
- module.exports = function (grunt) {
-   grunt.initConfig({
-     ...
-   });
- };


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Configuring Grunt Plugins
- To use a plugin in grunt:
  - Install the plugin
  - Load the plugin
- $ npm install grunt-contrib-jshint --save-dev

```javascript
//inside the grunt module
grunt.loadNpmTasks('grunt-contrib-jshint');
```

  - Configure the plugin

```javascript
//inside the grunt.initConfig()
grunt.initConfig({
  jshint: {
    app: ['Gruntfile.js', 'path/to/scripts/**/*.js']
  }
});
```







<!-- section start -->
<!-- attr: { id:'', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Grunt Plugins -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Grunt Plugins: Build
- jshint (**grunt-****contrib****-jshint** )
  - Runs jshint for specified files
- csslint(grunt-contrib-csshint)
  - Runs csslint for specified files
- stylus (**grunt-****contrib****-stylus**)
  - Compiles STYL files into CSS files
- uglify (**grunt-****contrib****-****uglify**)
  - Minifies configured JavaScript files
- concat (**grunt-****contrib****-****concat**)
  - Concats configured JavaScript files




<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Grunt Plugins: Development
- connect (**grunt-****contrib****-connect**)
  - Stars a Web server on a given port and host
- watch (**grunt-****contrib****-watch**)
  - Watches for changes to configured files
  - Can run other tasks on file changed






<!-- section start -->
<!-- attr: { id:'', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Yeoman -->
<!-- ## Application Scaffolding -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Yeoman
- Yeoman is a Node.js package for application scaffolding
  - Uses bower & NPM to install the js package 
  - Has lots of generators for many types of applications:
    - MEAN, AngularJS, Kendo-UI, WebApp, WordPress, Backbone, Express, etc…
    - Each generators install both needed **Node.js packages** and **client-side JavaScript libraries**
    - Generated **Gruntfile.js** for build/test/serve


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->

- Install Yeoman:

```javascript
$ npm install –g yo
```


```javascript
$ npm install –g generator-express
```


```javascript
$ cd path/to/app/directory
$ yo express
```

<!-- <img class="slide-image" showInPresentation="true" src="imgs\pic02.png" style="top:44.23%; left:75.14%; width:27.72%; z-index:-1" /> -->




<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Tools for JavaScript Development
- http://academy.telerik.com




