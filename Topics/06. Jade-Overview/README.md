<!-- section start -->
<!-- attr: { id:'jade', class:'slide-title', showInPresentation:true, hasScriptWrapper:true } -->
# Node.js View Engines
<article class="signature">
	<p class="signature-course">End-to-end JavaScript Applications</p>
	<p class="signature-initiative">Telerik Software Academy</p>
	<a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</article>




<!-- section start -->
<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Table of Contents
- View Engines
  - Overview
- Client-side view engines
  - KendoUI, Handlebars.js, AngularJS
- Server-side view engines
  - Jade


<!-- section start -->
<!-- attr: { id:'view-engines', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # View Engines -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# View Engines
- **View engine** (template engine) is a framework/library that generates views
- Using a programming language
- Web view engines are a mix-up of HTML and JavaScript
  - Given a template/view JavaScript generates a valid HTML code


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# JavaScript View Engines
- There are lots of JavaScript view engines, and they can be separated into client and server
  - Client: KendoUI, Handlebars.js, jQuery, AngularJS, etc.
  - Server: Jade, HAML, EJS, Vash, etc.
- Why use view engines?
  - Speed-up developer performance and easify the writing of HTML code
  - Auto generate DOM elements and make manual DOM manipulation almost useless



<!-- section start -->
<!-- attr: { id:'client-view-engines', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Client View Engines
## KendoUI, AngularJS, Handlebars.js -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Client View Engines
- Client view engines (templates) are used to parse data
  - The data is fetched from some place
    - i.e. with AJAX
  - The data is either raw JSON, XML or plain text
- Server view engines parse the data on the server
  - The client (browser) receives the read-to-use HTML


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Templates with Handlebars.js
- **Handlebars.js is** a library for creating client-side templates
- **Handlebars** supports:
  - One-time value-binding to JavaScript objects
  - Iteration over a collection of elements
  - Conditional templates


<!-- attr: { showInPresentation:true, hasScriptWrapper:true, style:'font-size:0.85em'  } -->
# Handlebars.js: _Example_
- Generates a list with all mustache types

```javascript
<h1>{{title}}</h1>
<ul class="mustaches-list">
{{#types}}
  <li>
    <input name="mustaches[]" 
           id="mustache-{{.}}"   
           type="radio" 
           value="{{.}}" />
    <label for="mustache-{{.}}">
      {{.}}
    </label>
  </li>
{{/types}}
```



<!-- attr: { showInPresentation:true, hasScriptWrapper:true, style:'font-size:0.8em'  } -->
# Handlebars.js: _Example_
- Generates a list with all mustache types

```js
<h1>{{title}}</h1>
<ul class="mustaches-list">
{{#types}}
  <li>
    <input name="mustaches[]" 
           id="mustache-{{.}}"   
           type="radio" 
           value="{{.}}" />
    <label for="mustache-{{.}}">
      {{.}}
    </label>
  </li>
{{/types}}
```

```js
var model = {
  title: 'Hello mustache!',
  types: ['Hungarian', 'Dali', 'Imperial', …]
}
```
- All binding is done inside **{{ }}**

<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Handlebars Templates
## Demo -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# KendoUI Templates
- **KendoUI templates** are part of the KendoUI framework
  - Can be found in **kendo.core.js**
  - Can be used stand-alone
- **KendoUI** templates supports:
  - One-time value-binding to JavaScript objects
  - Iteration over a collection of elements
  - Conditional templates


<!-- attr: { showInPresentation:true, hasScriptWrapper:true, style:'font-size:0.85em' } -->
# KendoUI Templates: _Example_
- Generates a table of technologies

```js
<h1>#: title #</h1>
<table>
  #for (var i = 0; i < technologies.length; i+=1) { #	    
    <tr>
      <td><input type='checkbox' id="technology-#: i #" /></td>
      <td><label for="technology-#: i #">
            #: technologies[i].name #
          </label>
      </td>
</table>
```


```javascript
var model = {
  title: 'Technologies',
  technologies: [{ name: 'ASP.NET', field: 'web' },
                 { name: 'Node.js', field: 'web' }, 
                 { name: 'WPF',     field: 'windows desktop' },
                 { name: 'Android', field: 'mobile' }]
};
```


<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # KendoUI Templates
## Demo -->



<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# AngularJS Templates
- AngularJS templates are a part of the Core AngularJS framework
  - They actually represent views for controllers
- AngularJS supports:
  - Two-way data and event binding to JS objects
  - Iteration over a collection of elements
  - Conditional templates


<!-- attr: { showInPresentation:true, hasScriptWrapper:true, style:'font-size:0.8em'  } -->
# AngularJS Templates: _Example_
- Generates a slide of images

```javascript
<div id="wrapper" ng-controller="ImagesController">
  <div class="slider">
    <strong>{{currentImage.title}}</strong>
    <img ng-src = "{{currentImage.src}}" width=800 />
    <ul class="slider-images-list">
      <li ng-repeat="image in images">
        <img ng-src="{{image.src}}" 
             ng-click="changeCurrent(image)"/>
      </li>
    </ul>
  </div>
</div>
```

```javascript
app.controller('ImagesController', function ($scope) {
  $scope.images = [{title: 'QA Academy 2012/2013 Graduation',
                    src: 'imgs/9511183282_cbe735bb73_c.jpg'} … ]    
  $scope.currentImage = $scope.images[0];
  $scope.changeCurrent = function(image){
    $scope.currentImage = image;
  };
});	
```

<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # AgnularJS Templates
## Demo -->



<!-- section start -->
<!-- attr: { id:'server-view-engines', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Server View Engines -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Server View Engines
- Server view engines return ready-to-use HTML to the client (the browser)
  - They parse the data to HTML on the server
  - *Web applications, created with server view engines are not real SPA apps
    - In most cases


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Jade Template Engine
- Jade is a server view engine
  - Produces HTML as a result
  - Can be parsed:
    - Manually (using CMD/Terminal commands)
    - Automatically using a task runner
    - Automatically using framework like Express
- Jade is more expressive and dynamic than HTML
  - Jade template can be parsed based on JS models or conditionals


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Using Jade
- Install Jade with Node.js:

```javascript
$ npm install jade -g
```

- Create the **index.jade** file:

```javascript
ul
  each val in [1, 2, 3, 4, 5]
    li= 'Item ' + val
```

<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Using Jade -->
- Run:

```javascript
$ jade index.jade
```

- Generates **index.html** with content:

```javascript
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
  <li>Item 5</li>
</ul>
```

<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Using Jade
## Demo -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true, style:"font-size:0.65em" } -->
# Jade Features: Tags
- Omit the opening and closing tags
  - Even their brackets
  - IDs and classes are set as in CSS selectors
    - `#id` and `.class`

```javascript
#wrapper
  table.special
    tr
      th Header 1
      th Header 2
    tr
      td Data 1
      td Data 2
```
<!-- element: style="width:50%" -->

```javascript
<div id="wrapper">
  <table class="special">
    <tr>
      <th>Header 1</th>
      <th>Header 2</th>
    </tr>
    <tr>
      <td>Data 1</td>
      <td>Data 2</td>
    </tr>
  </table>
</div>
```
<!-- element: style="width:50%" -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true, style:"font-size:0.65em" } -->
# Jade Features: Attributes
- Attribites are written inside '**(**' and '**)**'
  - And separated with commas '**,**'

```javascript
#wrapper
  header
    h1#logo
      a(href='...')        
        img(src='…')
    nav#main-nav: ul
      li.nav-item
       a(href='…')
```


```javascript
<div id="wrapper">
  <header>
    <h1 id="logo">
      <a href="...">       
 	<img src="..."/>
      </a>
    </h1>
    <nav id="main-nav">
      <ul>
        <li class="nav-item">  
          <a href="...">...</a>
        </li>
      </ul>
    </nav>
  </header>
</div>
```

<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Jade Features
## Demo -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true, style:"font-size:0.65em" } -->
# Jade Models
- Jade can generate markup, using data models
  - i.e. given an array of items, put them into a table 

```javascript
#wrapper
  header
    h1#logo
      a(href='...')
        = title
    nav#main-nav: ul
      each item in nav
        li.nav-item
          a(href= item.url) 
            = item.title
```


```javascript
<div id="wrapper">
  <header>
    <h1 id="logo">
      <a href="...">Lorem ipsum</a>
    </h1>
    <nav id="main-nav">
      <ul>
        <li class="nav-item">
          <a href="#home">Home</a>
        </li>
        <li class="nav-item">
          <a href="#about">About</a>
        </li>
      </ul>
    </nav>
  </header>
</div>
```


```javascript
Is parsed to
```


<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Jade Models
## Demo -->



<!-- attr: { showInPresentation:true, hasScriptWrapper:true, style:"font-size:0.65em" } -->
# Running Script in Jade
- Jade can contain conditionals, loops, etc…
  - And the HTML is generated based on the model

```javascript
if condition
  h1.success
    | Fulfilled! 
else
  h1.error
    | Not fullfilled   
```


```javascript
model = {
  condition: true}
```


```javascript
<h1 class="success">
  Fulfilled! 
</h1>
```


```javascript
model = {
  condition: false}
```


```javascript
<h1 class="error">
  Not fulfilled! 
</h1>
```

<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Scripts in Jade
## Demo -->

<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# View Engines
- http://academy.telerik.com

