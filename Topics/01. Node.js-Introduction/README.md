<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# Introduction to Node.js
## What is Node.js? How to use Node.js?

<div class="signature">
    <p class="signature-course">Web applications with Node.js</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>

<!-- section start -->

# Table of contents

- Node.js Overview
  - What is Node.js?
  - How does Node.js work?
  - The **event loop** of Node.js
- Preparations for using Node.js
  - Installation
  - IDEs

<!-- section start -->

<!-- attr: {class: "slide-section"} -->
# Node.js Overview
##  First steps into Node.js

<!-- attr: {style: 'font-size: 0.9em'} -->
# Node.js Overview

> Node.js is an **open-source**, **cross-platform**
> JavaScript runtime environment for developing a
> diverse variety of tools and applications

- Node.js is a platform that **runs JavaScript**
  - It is not a JavaScript framework!
- Node.js's runtime environment interprets JavaScript using [Google's V8 JavaScript engine](https://developers.google.com/v8/)
- Node.js has an **event-driven architecture** capable of asynchronous I/O


# How does Node.js work?

- Node.js is a **single-threaded**
  - All operations are distributed by the event loop
  - The main thread is never blocked
- Node.js works based on [libuv](http://docs.libuv.org/en/v1.x/)
  - The libuv decides how many threads must be created, based on the operations

# The Event Loop

- The event loop handles all requests and distributes operations to the OS

![The event loop](https://i.stack.imgur.com/Lbs9z.png)

- More on the subject [here](https://nodesource.com/blog/understanding-the-nodejs-event-loop/)

<!-- section start -->

<!-- attr: {class: "slide-section"} -->
# Running Node.js
##  And using it


# Running Node.js

- Variant 1 (Standard)
  1.  Download the [Node.js setup](http://nodejs.org)
  2.  Start the setup
  3.  Next... Next... Next
  4.  Ensure Node.js is added to `$PATH`
    - Open terminal or CMD and type `$ node -v`
      - In case of error, add Node.js install directory to `$Path`
  5.  You are ready to go
-   Add something to `$PATH`:
  - [Windows](http://stackoverflow.com/a/27864253)/[Unix-based](https://coolestguidesontheplanet.com/add-shell-path-osx/)

# Running Node.js

- Variant 2 (Using NVM)
  1.  Download NVM
    - [Download for Windows](https://github.com/coreybutler/nvm-windows)
        - **Change the installation directory to `C:\nvm`**!
    - [Download for Linux and Mac](https://github.com/creationix/nvm)
  2.  Ensure NVM is added to `$PATH`
    - Open terminal or CMD and type `$ nvm`
      - In case of error, add NVM install directory to `$Path`
  3. Install Node.js:
      - Open Terminal or CMD and type `nvm install 7`
  5.  You are ready to go

#   IDES for Node.js

- Node.js is multi-platform and can be coded everywhere
- Yet, some tools are better than others:
  - [Visual Studio Code](https://code.visualstudio.com/)

  - [Atom](https://atom.io/)
  - [WebStorm](https://www.jetbrains.com/webstorm/specials/webstorm/webstorm.html)

<!-- section start -->

<!-- section start -->
<!-- attr: { id:'questions', class:'slide-section' } -->
# Questions
## Introduction to Node.js
[link to the forum](http://telerikacademy.com/Forum/Category/60/end-to-end-javascript-applications)
