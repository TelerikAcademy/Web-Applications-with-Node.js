<!-- section start -->
<!-- attr: { id:'title', class:'slide-title', hasScriptWrapper:true } -->
# Mongoose with Node.js and MongoDB
## MongoDB Overview, Node.js drivers for MongoDB, Object-document modeling with Mongoose

<div class="signature">
    <p class="signature-course">Web applications with Node.js</p>
    <p class="signature-initiative">Telerik Software Academy</p>
    <a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</div>




<!-- section start -->
# Table of contents

- MongoDB Native Overview
- Mongoose Overview
- Mongoose Models
  - Types of properties
  - Virtual methods
  - Property validation
- Mongoose CRUD operations
  - Save, remove, find
- Mongoose queries




<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# MongoDB Native Overview
## Download, installation, drivers




<!-- attr: {style: 'font-size: 0.9em'} -->
# What is MongoDB?
- Cross-platform, document oriented database that provides high performance, high availability, and easy scalability
- Open-source and leading NoSQL database
- Written in C++




<!-- attr: {style: 'font-size: 0.9em'} -->
# Advantages of MongoDB
- Schema less - collection holds different documents. Number of fields, content and size of te document can differ from one doc to another
- No complex joins
- Deep query-ability
- Aggressive caching




<!-- attr: {style: 'font-size: 0.9em'} -->
# Why use MongoDB?
- Document oriented storage - data is stored in the form of JSON style documents.
- Index on any attribute
- Auto-sharding (distributing data accros multiple machines)
- Fast in-place updates
- Professional support




<!-- attr: {style: 'font-size: 0.9em'} -->
# Using MongoDB
- Download MongoDB from the official website:
 - https://www.mongodb.org/downloads
 - Installers for all major platforms
- When installed, MongoDB needs a driver to be used with a specific platform
 - One to use with Node.js, another to use with .NET, etc...
- Installing MongoDB driver for Node.js  

```javascript
$ npm install mongodb -g
```




<!-- attr: {style: 'font-size: 0.9em'} -->
# Working with MongoDB from Node.js
- Once installed, the MongoDB server must be started.
 - Go to the installation folder and run `mongod.exe`
 - You can also add `mongod.exe` to the `PATH`
- When started, the MongoDB server can be used from Node.js




<!-- attr: {style: 'font-size: 0.9em'} -->
# Creating MongoDB Database
- The database is created using Node.js
 - The 'mongodb' module is required

```javascript
const mongodb = require('mongodb');
```

 - To establish a connection, we need the `MongoClient` module

```javascript
const MongoClient = mongodb.MongoClient;
```

 - Open connection to the `mongodb` server

```javascript
MongoClient.connect('mongodb://localhost:27017/DatabaseName')
  .then((db)=> {
    // query the database...
  })
```



<!-- attr: {style: 'font-size: 0.9em'} -->
# Queries over MongoDB<br/> with Node.js
- MongoDB module supports all kinds of queries over the data
 - Creating new documents
   - And adding new records
 - Editing existing documents
   - And their records
 - Removing documents and records
 - Querying whole documents or parts of them




<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Node.js and MongoDB
##  Live demo



<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Mongoose Overview
## Connecting to MongoDB, Working with Schemas




<!-- attr: {style: 'font-size: 0.9em'} -->
# Mongoose Overview
- Mongoose is an ODM module in Node.js for MongoDB
  - Wraps the functionality of the native MongoDB driver
  - Exposes models to control the records in a documents
  - Supports `validation on save`
  - Extends the native queries




<!-- attr: {style: 'font-size: 0.9em'} -->
# Installing Mongoose
- Run the following command from the CMD/terminal

```javascript
$ npm install mongoose
```

- In Node.js
  - Load the module and connect to the database

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/DatabaseName')
```

   - Create models and persist data

```javascript
const Unit = mongoose.model('Unit', { unitType: String });
new Unit({ unitType: 'Warrior' }).save(callback); // create
Unit.find({ unitType: 'Warrior' }).exec(callback); // fetch
```



<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Installing and Using Mongoose
## Live demo




<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Mongoose Models & Schemas



<!-- attr: {style: 'font-size: 0.9em'} -->
# Mongoose Models
- Mongoose supports models
  - i.e. fixed types of documents
    - Used like object constructors
  - They need a `mongoose.Schema` to validate against

```javascript
const modelSchema = new mongoose.Schema({
  propString: String,
  propNumber: Number,
  propObject: {},
  propArray: [],
  propBool: Boolean
});

const Model = mongoose.model('ModelName', modelSchema);
```




<!-- attr: {style: 'font-size: 0.9em'} -->
# Mongoose Models (2)
- Each of the properties must have a type
  - Types can be Number, String, Boolean, array, object or a complex type (other schema)

```javascript
const modelSchema = new mongoose.Schema({
  propNested: {
    propNestedNumber: Number,
    propDoubleNested: {
      propArr: []
    }
  }
});

const model = mongoose.model('ModelName', modelSchema);
```




<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Mongoose Models
## Live Demo





<!-- attr: {style: 'font-size: 0.8em'} -->
# Mongoose Models with Instance methods
- Since mongoose models are just JavaScript object constructors they can have methods
  - And these methods can be added to a Schema
    - Use a different syntax than plain JS

```javascript
var unitSchema = new mongoose.Schema({…});
unitSchema.methods.move = function(to){
 // …
};
```

  - And now can be called on a model of type Unit

```javascript
var unit = new Unit({ … } );
unit.move({x: 5, y: 6});
```




<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Mongoose Models with Instance methods
## Live demo




<!-- attr: {style: 'font-size: 0.9em'} -->
# Mongoose Models with Virtual Properties
- Yet, not all properties need to be persisted to the database
  - Mongoose provides a way to create properties, that are accessible on all models, but are not persisted to the database
    - And they have both getters and setters

```javascript
var unitSchema = new mongoose.Schema({…});
unitSchema.virtual('escapedTitle').get(function(){ … });
unitSchema.virtual('escapedTitle').set(function(title){ … });
```




<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Virtual Properties
## Live demo




<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Property Validation




<!-- attr: {style: 'font-size: 0.9em'} -->
# Property Validation
- With Mongoose developers can define custom validation on their properties
  - i.e. validate records when trying to save

```javascript
var unitSchema = new mongoose.Schema({…});
unitSchema.path('position.x').validate(function(value){
  return value>=0 && value <= maxX;
});
unitSchema.path('position.y').validate(function(value){
  return value>=0 && value <= maxY;
});
```




<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Property Validation
## Live demo




<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# CRUD with Mongoose
## Create, Read, Update, Delete entries




<!-- attr: {style: 'font-size: 0.9em'} -->
# Property Validation
- Mongoose supports all the CRUD operations:
  - Create
    - `modelObj.save(callback)`;
  - Read
    - `Model.find({ ... }).exec(callback)`;
  - Update
    - `modelObj.update(props, callback)`
    - `Model.update(condition, props, callback)`;
  - Remove
    - `modelObj.remove(callback)`
    - `Model.remove(condition, props, callback)`;




<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# CRUD Operations with Mongoose
## Live demo




<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Mongoose Queries




<!-- attr: {style: 'font-size: 0.9em'} -->
# Mongoose Queries
- Mongoose defines all queries of the native MongoDB driver in a more clear and concise way
  - Instead of this:

```javascript
{$or: [{conditionOne: true},
       {conditionTwo: true}]
}
```

  - Do that:

```javascript
.where({conditionOne: true}).or({conditionTwo: true});
```




<!-- attr: {style: 'font-size: 1em'} -->
# Mongoose Queries
- Mongoose supports many queries:
  - For equality/non-equality
  - Selection of some properties
  - Sorting
  - Limit & skip
- All queries are executed over the object returned by Model.find()
  - Call `.exec()` at the end to send the query to the server



<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Mongoose Queries
## Live demo




<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Mongoose Models Modules




<!-- attr: {style: 'font-size: `0.9`em'} -->
# Mongoose Models
- Having all model definitions in the main module is no good
  - That is the reason Node.js has modules in the first place
  - We can put each model in a different `module`, and load all models at start




<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Mongoose Models Modules
## Live demo




<!-- section start -->
<!-- attr: {class: "slide-section"} -->
# Questions?
