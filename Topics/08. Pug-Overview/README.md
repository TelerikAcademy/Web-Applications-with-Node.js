<!-- section start -->
<!-- attr: { id:'jade', class:'slide-title', showInPresentation:true, hasScriptWrapper:true } -->
# Pug Overview
##  Features, usage, installation
<article class="signature">
	<p class="signature-course">End-to-end JavaScript Applications</p>
	<p class="signature-initiative">Telerik Software Academy</p>
	<a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</article>

<!-- section start -->
<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Table of Contents

- Pug Overview
- Pug Syntax
  - Iteration
  - Conditionals
  - Extends
  - Mixins

<!-- section start -->
<!-- attr: { id:'view-engines', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Pug Overview -->

# Pug Overview
- Pug is a high performance template engine
  - Compiles to pure HTML
  - Influenced by Haml
  - Runs with JavaScript for Node.js and browsers
- Pug uses significant whitespace
  - Indentation makes nesting

<!-- attr: {style: "font-size: 0.9em"} -->
# Running Pug

- To run Pug:
  - `$npm install -save pug`
  - Write some pug code (in `index.pug`):

    ```jade
    h1 Welcome to our site
    nav
      ul
        each title in ["home", "products", "about us"]
          li
            a(href="#")= title
    ```

  - Compile:

    ```js
    pug.renderFile("index.pug");
    ```

<!-- section start -->
<!-- attr: { class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Pug Features -->

<!-- attr: {style: "font-size: 0.9em"} -->
# Pug Features

- Pug has a near-to-JavaScript syntax for generating HTML
  - Something like dynamic-HTML
- Supports:
  - [Conditionals](https://pugjs.org/language/conditionals.html)
    - if-else, case-when
  - [Iteration](https://pugjs.org/language/iteration.html)
    - each, while, for loops
  - [Extending other templates](https://pugjs.org/language/extends.html)
  - [Mixins](https://pugjs.org/language/mixins.html)
  - [Executing code](https://pugjs.org/language/code.html)

<!-- attr: { class: "slide-section", showInPresentation:true, hasScriptWrapper:true } -->
# Questions
##  Pug Overview
[Telerik Academy Forums](http://forums.academy.telerik.com)
