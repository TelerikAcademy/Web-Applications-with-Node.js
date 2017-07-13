<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# MongoDB with Node.js
## MongoDB Overview, Node.js drivers for MongoDB

<div class="signature">
    <p class="signature-course">Web applications with Node.js</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>


<!-- section start -->
# Table of contents

- MongoDB Overview
- Using MongoDb with Node.js
  - Connecting
  - Collections
  - Querying the collections
- Building MongoDb access layer
  - Dynamic access layer and models

<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# MongoDB Overview
## Download, installation, drivers


<!-- attr: {style: 'font-size: 0.9em'} -->
# What is MongoDB?
- Cross-platform, document-oriented database
  - High performance, high availability, easy scalability
- Open-source and leading NoSQL database
- Written in C++


<!-- attr: {style: 'font-size: 0.9em'} -->
# Advantages of MongoDB
- Schema less 
  - A collection can hold different documents
     - Number of fields, content and size can differ from one doc to another
- No complex joins
  - Or no joins at all
- Deep query-ability
- Aggressive caching

<!-- attr: {style: 'font-size: 0.9em'} -->
# Why use MongoDB?
- Document-oriented storage
  - Data is stored in the form of JSON style documents
- Index on any attribute
- Fast in-place updates
- Professional support

<!-- attr: {style: 'font-size: 0.9em'} -->
# Setup MongoDB

- Install MongoDB
  - Available in pacman, apt-get, homebrew, choco
  - Or download from the [official website](https://www.mongodb.org/downloads)
- When installed, MongoDB needs a driver to be used with a specific platform
 - One to use with Node.js, another to use with .NET, etc...

<!-- attr: {style: 'font-size: 0.9em'} -->
# Working with MongoDB from Node.js

- Once installed, the MongoDB server must be started
  - Open a terminal/CMD
  - Go to `/installation/path/of/mongodb`
  - Run 'mongod' 
  - You can also add `/installation/path/of/mongo` to the `PATH`
- When started, the MongoDB server can be used from Node.js


<!-- attr: {style: 'font-size: 0.9em'} -->
# Using MongoDB in Node.js application

- Install the native MongoDB driver
  - `npm install --save mongodb`
    - or `yarn add mongodb`
- Then:

```javascript
// MongoClient is used to connect to a MongoDB instance
const { MongoClient } = require('mongodb');

// connectionString has the form 'mongodb://SERVER:PORT/DB_NAME'
MongoClient.connect(connectionString)
  .then((db) => {
    // use db to access the database
    const superheroesCollection = db.collection('superheroes');
    return superheroesCollection.find({})
	.ToArray();
  })
  .then((superheroes) => {
    console.log(superheroes);
  });
```

<!-- attr: {style: 'font-size: 0.9em'} -->
# Queries over MongoDB with Node.js

- The native MongoDB driver:
  - Supports all queries, insert, find, update, etc... 
  - Querying whole documents or parts of them
  - Works with promises and callbacks

<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Node.js and MongoDB
##  Live demo


<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# MongoDB with Node.js
## Questions?
