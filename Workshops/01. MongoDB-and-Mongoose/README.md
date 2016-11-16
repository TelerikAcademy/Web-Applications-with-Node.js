# MongoDB & Mongoose Workshop
You are given a few simple tasks in order to exercise the skills learned through the first lectures from the **Node.js** course. The main goal is to improve your knowledge on using `async operations` and `modules` responsible for `data access` like working with the `file system` or querying a `database`, all that in a Node.js environment.  
You can use any external resources. For example:  

 - [Node.js File system API](https://nodejs.org/api/fs.html)
 - [MongoDB Collections API](http://mongodb.github.io/node-mongodb-native/2.2/api/Collection.html)
 - [Mongoose.js API](http://mongoosejs.com/docs/index.html)

# General description
You must create a database called **TelerikFriends**. The database will have only 1 collection called **TelerikEmployees**. The documents stored in this collection must have the following data fields:  

 - **(\*required)** Employee first, middle and last name (as individual fields, each name must start with an uppercase letter and consist of letters only from the latin alphabet)
 - **(\*required)** Employee insurance number (can contain uppercase and lowercase letters, numbers from 0 to 9 and the dash("-") symbol)
 - **(\*required)** Age (which must always be a number between 0 and 120 inclusive)
 - **(\*required)** Contact details (a complex type that contains the employee's phone number, email address, work room number)
   - Phone number (must be a String which contains only numbers from 0 to 9 and must have 1 whitespace character after each 3 digits)
   - **(\*required)** Email address (a String that represents a valid email address)
   - **(\*required)** Work room number (a Number that contains only 3 digits in the interval between 100 and 999)
 - Items for sale (which must be an array of items which are sold or granted as a present for free). Each of the Items for sale must have the following data fields:
   - **(\*required)** Item name (a string which contains only uppercase and lowercase letters)
   - Item price (must be a number)
   - **(\*required)** Give away status (must always be one of the String values found in the enum **['Give away', 'For Sale'])**
   - **(\*required)** Offer start date (type Date with default value Date.now)
   - **(\*required)** Offer end date (type Date and cannot be a date previous than **Offer start date**, with default value Date.now + 1 month)
 - Items received (an Array of strings, which contains the Items names)

In order to do this, you must execute the steps described bellow.
All fields marked as **"\*required"** must always be present when creating a mongoose model.

# Generate a .json file
Generate a `.json` file that represents object that contains the information described above for **multiple Telerik Employees** which are selling items. Each employee must have between 1 and 5 items for sale. After you generate the .json file - persist it to the file system in a specified folder from which you will read it later. You can split the information on multiple .json files if you find suitable. Take notice that you will be assembling the information from the files later in order to persist it to the database. (You decide how the format of the .json file will look like, just make it comfortable for you to use it).

# Create Mongoose Schemas and Models
Create mongoose models to ensure consistent data storage for the **Telerik Friends** database. Use Schemas that fully correspond to the model description given above. Use the **built-in validators** or create **custom-validators** if necessary. Use **nested schemas** and consider the idea of generating **multiple models**, one for the **Item for sale**, one for the **Contact details** and one for the **Telerik Employee** (do you even separate concerns?)

# Split the Mongoose models
Split the **mongoose models** definitions in **separate .js** files in order to have a cleaner architecture and then use them with `require` like this "`const Model = require('pathToModel')`".

# Create mongoose objects from a .json file
**Read** the generated **.json** file/files and **create** instances of the mongoose models which will be persisted to the database. **Think about the way you will send the generated mongoose object to the database** (take in notice the N+1 queries problem).

# Query the database
 1. Write a query, which retrieves all Telerik Employees which satisfies the following conditions:
    - Has first name that starts with **one** of the letters in the array `[ABPG]`, case insensitive.
    - Has age beteen 18 and 28 inclusive.
    - Has email address registered to the domain "`@progress.com`"
    - Has a phone number starting with country code "`359`"
    - Has at least 3 items for sale
    - Sort them by Items for sale count in descending order
    - Take top 3

 - Write a query which finds the first 3 Telerik Employees from Bulgaria, from all of the employees sorted by Age in descending order, and deletes them from the database. Try do it in a single query to the database if possible.

# Create instance methods
Create one instance method called "Sell item to a friend" for the **Telerik Employee model** which accepts as an argument another Telerik Employee and an item for sale Id, and executes the transaction (remove the item from the employee's list of items for sale, and add it to the other employee's list of items received, if any of the operations in the transaction fail, you must restore the database's initial state).

# Create virtual properties
Create virtual property which gets and sets the **full name** of a given employee (yes, you must find a way to set the full name from the virtual property without accessing each of the individual properties: "first, middle and last name").

# Other guidelines
 - Build a clean solution and follow the Node.js modules architecture
 - Consider using JSON.stringify and JSON.parse methods to create jsObject from json string or vice versa.
