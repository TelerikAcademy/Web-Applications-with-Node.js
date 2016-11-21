<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# Async programming in Node.js
## What is async programming? How does Node.js use async operations?

<div class="signature">
    <p class="signature-course">Web applications with Node.js</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->
# Table of contents

- Asynchronous programming fundamentals
- Promises and callbacks recap
- Async programming in Node.js


<!-- section start -->
<!-- attr: { id:'asynchrony-in-js', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- #  Asynchrony in JavaScript
##  How to do it -->

<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
#  Asynchrony in Node.js
- Node.js is single-threaded
  - Yet, the event loop is not
  - Operations can be run asynchronous and passed to the event queue of the event loop
    1.  The event loop runs as many threads as it finds necessary
    2.  Fires an event handler when the async operation is ready

<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
#  Asynchrony in Node.js

- Asynchronous operations in Node.js can be executed three ways:
  1.  With **callbacks**
    - Standard, old-and-still-good-enough way
    - Supported by most packages
  2.  With **promises**
    - "The new way"
    - Supported in some packages
      - Most of the time callbacks must be wrapped into promises manually
  3.  With **function generators** and `yield`
  - "The newest way"
  - Not supported by most packages
  - Too great overhead to use for now...
  - Libraries like

#  Asynchronous

<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Questions?
## Async programming in Node.js
