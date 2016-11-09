<!-- section start -->
<!-- attr: { id:'', class:'slide-title', showInPresentation:true, hasScriptWrapper:true } -->
# MongoDB and Mongoose
## Object-document Model
<article class="signature">
	<p class="signature-course">End-to-end JavaScript Applications</p>
	<p class="signature-initiative">Telerik Software Academy</p>
	<a href="http://academy.telerik.com" class="signature-link">http://academy.telerik.com</a>
</article>


<!-- attr: { id:'', showInPresentation:true, hasScriptWrapper:true } -->
# Table of Contents
- MongoDB Native Overview
- Mongoose Overview
- Mongoose Models
  - Types of properties
  - Virtual methods
  - Property validation
- Mongoose CRUD operations
  - Save, remove, find
- Mongoose Queries




<!-- section start -->
<!-- attr: { id:'', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # MongoDB Native Overview -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Using MongoDB
- Download MongoDB from the official web site:
  - https://www.mongodb.org/downloads
  - Installers for all major platforms
- When installed, MongoDB needs a driver to be usable with a specific platform
  - One to use with Node.js, another to use with .NET, etc…
- Installing MongoDB driver for Node.js:

```node
$ npm install mongodb -g
```



<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Working with MongoDB from Node.js
- Once installed, the MongoDB must be started
  - Go to installation folder and run **mongod**

```node
$ cd path/to/mondodb/installation/folder
$ mondgod
```
  - Or add mongod.exe to the PATH
- When run, the MongoDB can be used from Node.js


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Creating MongoDB Database
  - Create a server to host the database
- The database is created using Node.js
  - The '**mongodb**' module is required
- var mongodb = require('mongodb');

```javascript
var server = new mongodb.Server('localhost', 27017);
```

  - Create mongodb client that connects to the server

```javascript
var mongoClient = new mongodb.MongoClient(server);
```

  - Open connection to the mongodb server

```javascript
mongoClient.open(function(err, client){
  var db = client.db('DATABASE_NAME');
  //queries over the db
});
```



<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Queries over MongoDB with Node.js
- MongoDB module supports all kinds of queries over the data
  - Creating new documents
    - And adding records
  - Editing existing documents
    - And their records
  - Removing documents and records
  - Querying whole documents or parts of them


<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Node.js and MongoDB
## Demo -->


<!-- section start -->
<!-- attr: { id:'', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Mongoose Overview -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Mongoose Overview
- Mongoose is a object-document model module in Node.js for MongoDB
  - Wraps the functionality of the native MongoDB driver
  - Exposes models to control the records in a doc
  - Supports validation on save
  - Extends the native queries


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Installing Mongoose
- Run the following from the CMD/Terminal
- $ npm install mongoose
- In node
  - Load the module

```javascript
var mongoose = require('mongoose');
```

  - Connect to the database

```javascript
mongoose.connect(mongoDbPath);
```

  - Create models and persist data

```javascript
var Unit = mongoose.model('Unit', { type: String} );
new Unit({type: 'warrior'}).save(callback); //create
Unit.find({type: 'warrior'}).exec(callback); //fetch
```

<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Installing and Using Mongoose
## Demo -->


<!-- section start -->
<!-- attr: { id:'', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Mongoose Models -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Mongoose Models
- Mongoose supports models
  - i.e. fixed types of documents
    - Used like object constructors
  - Needs a mongoose.Schema

```js
var modelSchema = new mongoose.Schema({
  propString: String,
  propNumber: Number,
  propObject: {},
  propArray: [],
  propBool: Boolean
});
var Model = mongoose.model('Model', modelSchema);
```


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Mongoose Models -->
- Each of the properties must have a type
  - Types can be Number, String, Boolean, array, object
    - Even nested objects

```js
var modelSchema = new mongoose.Schema({
  propNested: {
    propNestedNumber: Number,
    propDoubleNested: {
      propArr: []
    }
  }
});

var Model = mongoose.model('Model', modelSchema);
```

<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Mongoose Models
## Demo -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Mongoose Models with Instance Methods
- Since mongoose models are just JavaScript object constructors they can have methods
  - And these methods can be added to a schema
    - Use a different syntax than plain JS

```javascript
var unitSchema = new mongoose.Schema({…});
unitSchema.methods.move = function(to){
 …
};
```

- And now can be called on a model of type Unit

```javascript
var unit = new Unit({ … } );
unit.move({x: 5, y: 6});
```

<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Mongoose Models with Instance Methods
## Demo -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Mongoose Models with Virtual Properties
- Yet, not all properties need to be persisted to the database
  - Mongoose provides a way to create properties, that are accessible on all models, but are not persisted to the database
    - And they have both getters and setters

```javascript
var unitSchema = new mongoose.Schema({…});
game.virtual('escapedTitle').get(function(){ … });
game.virtual('escapedTitle').set(function(title){ … });
```

<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Virtual Properties
## Demo -->


<!-- section start -->
<!-- attr: { id:'', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Property Validation -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Property Validation
- With Mongoose developers can define custom validation on their properties
  - i.e. validate records when trying to save

```js
var unitSchema = new mongoose.Schema({ … });
unitSchema.path('position.x').validate (function (value){
  return value >= 0 && value <= maxX;
});

unitSchema.path('position.y').validate (function (value){
  return value >= 0 && value <= maxY;
});
```


<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Property Validation
## Demo -->


<!-- section start -->
<!-- attr: { id:'', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # CRUD with Mongoose -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# CRUD with Mongoose
- Mongoose supports all the CRUD operations:
  - Create –> **modelObj.save(callback)**
  - Read –> **Model.find().exec(callback)**
  - Update –> **modelObj.update(props, callback)**
    - –> **Model.update(condition, props,cb)**
  - Remove –> **modelObj.remove(callback)**
    - –> **Model.remove(condition, props,cb)**

  
<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # CRUD Operations with Mongoose
## Demo -->


<!-- section start -->
<!-- attr: { id:'', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Mongoose Queries -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Mongoose Queries
- Mongoose defines all queries of the native MongoDB driver in a more clear and useful way
  - Instead of:

```javascript
{$or: [{conditionOne: true},
       {conditionTwo: true}]
}
```

  - Do:

```javascript
.where({conditionOne: true}).or({conditionTwo: true})
```



<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Mongoose Queries -->
- Mongoose supports many queries:
  - For equality/non-equality
  - Selection of some properties
  - Sorting
  - Limit & skip
- All queries are executed over the object returned by Model.find*()
  - Call .exec() at the end to run the query


<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Mongoose Queries
## Demo -->



<!-- section start -->
<!-- attr: { id:'', class:'slide-section', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Mongoose Models Modules -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# Mongoose Models
- Having all model definitions in the main module is no good
  - That is the reason Node.js has modules in the first place
  - We can put each model in a different module, and load all models at start


<!-- attr: { class:'slide-section demo', showInPresentation:true, hasScriptWrapper:true } -->
<!-- # Mongoose Models Modules
## Demo -->


<!-- attr: { showInPresentation:true, hasScriptWrapper:true } -->
# MongoDB and Mongoose
- http://academy.telerik.com




