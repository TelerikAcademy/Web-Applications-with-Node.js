'use strict';

// Get a connection string
const mongoDbConnectionString = 'mongodb://localhost:27017/computers';

// Get a pending connection to the database server
const mongoose = require('mongoose');
mongoose.connect(mongoDbConnectionString);

// Get notified for the connection status
const db = mongoose.connection;

db.on('error', (err) => {
    console.log('Connection failed!\n' + err);
});

db.on('open', () => {
    console.log('Connection successfully established!');
});

// ========================================
//              Using schemas
// ========================================
// const modelSchema = mongoose.Schema({
//     model: String,
//     releaseDate: Date,
//     priceInDollars: Number,
//     displaySizeInInches: Number
// });
// const modelName = 'Laptop';
// const Laptop = mongoose.model(modelName, modelSchema);
// const asus = new Laptop({
//     model: 'Asus G752',
//     releaseDate: new Date(2016, 10, 29),
//     priceInDollars: 1799,
//     displaySizeInInches: 17.3
// });

// asus.save((err, entry, numAffected) => {
//     console.log(entry);
//     console.log(numAffected);
// });

// ========================================
//              Nested Schemas
// ========================================

// const schemaLevel1 = mongoose.Schema({
//     prop1: String,
//     prop2: Number,
//     prop3: Object
// });

// const schemaLevel2 = mongoose.Schema({
//     prop1: String,
//     prop2: Number,
//     prop3: Number
// });

// const schemaLevel3 = mongoose.Schema({
//     prop1: {
//         prop11: schemalevel1,
//         prop12: {
//             prop121: schemalevel2,
//             prop122: String
//         }
//     }
// });

// ========================================
//          Using instance methods
// ========================================
const laptopSchema = mongoose.Schema({
    model: String,
    releaseDate: Date,
    priceInDollars: Number,
    displaySizeInInches: Number
});

// Instance methods don't work with arrow functions because of the nature of 'this' keyword
laptopSchema.methods.getDetailedDescription = function () {
    const productDescription =
        `Product description:
        Model: ${this.model}
        Release date: ${this.releaseDate}
        Price: ${this.priceInDollars}$
        Display size: ${this.displaySizeInInches}''`;

    return productDescription;
};

const modelName = 'Laptop';
const Laptop = mongoose.model(modelName, laptopSchema);
// const asus = new Laptop({
//     model: 'Asus G752',
//     releaseDate: new Date(2016, 10, 29),
//     priceInDollars: 1799,
//     displaySizeInInches: 17.3
// });

// asus.save((err, entry) => {
//     console.log(entry.getDetailedDescription());
// });

// ========================================
//          Working with collections
// ========================================
// You can query the database collections through the created mongoose models
// Laptop.find((err, laptops) => {
//     if (err) {
//         console.log(err);
//     }

//     console.log(laptops);
// });

// const productId = '582a47ad03315e2df05fe196';
// const filter = {
//     _id: productId
// };

// Laptop.find(filter, (err, laptops) => {
//     for(let i = 0; i< laptops.length; i+=1){
//         console.log(laptops[i].getDetailedDescription());
//     }
// });

// Laptop.findById(productId, (err, laptop) => {
//     console.log(laptop.getDetailedDescription());
// });

// Laptop.find()
//     .where({
//         model: new RegExp('Asus', 'i')
//     })
//     .and({
//         priceInDollars: {
//             $lt: 3000,
//             $gt: 1600
//         }
//     })
//     .sort({
//         priceInDollars: 'desc'
//     })
//     .limit(3)
//     .exec((err, results) => {
//         for (let i = 0; i < results.length; i += 1) {
//             console.log(results[i].getDetailedDescription());
//         }
//     });


// ========================================
//       Built-in Property Validators
// ========================================

// const productNumberMatch = /[a-zA-Z1-9]/;
// const displaySizes = ['13', '15.6', '17.3', '18', '21'];
// var complexLaptopSchema = mongoose.Schema({
//     model: String,
//     productNumber: {
//         type: String,
//         required: true,
//         match: productNumberMatch
//     }, // Match validator
//     displaySize: {
//         type: String,
//         required: true,
//         enum: displaySizes
//     }, // Enum validator
//     priceInDollars: Number,
//     discountPercentage: {
//         type: Number,
//         required: false,
//         min: 5,
//         max: 25
//     } // Number validator
// });

// ========================================
//       Custom Validators
// ========================================

// const stringSizeValidator = [
//     function (val) {
//         return val.length > 0 && val.length <= 60;
//     },
//     'String must be between 1 and 60 characters long'
// ];

// var personSchema = new Schema({
//     firstName: {
//         type: String,
//         required: true,
//         validator: stringSizeValidator
//     },
//     secondName: {
//         type: String,
//         required: true,
//         validator: stringSizeValidator
//     }
// });



// function fillComputersData() {
//     const laptops = [
//         new Laptop({
//             model: 'Asus G753',
//             releaseDate: new Date(2016, 10, 30),
//             priceInDollars: 1899,
//             displaySizeInInches: 17.3
//         }),
//         new Laptop({
//             model: 'Asus G754',
//             releaseDate: new Date(2016, 11, 1),
//             priceInDollars: 1779,
//             displaySizeInInches: 17.6
//         }),
//         new Laptop({
//             model: 'Asus G756',
//             releaseDate: new Date(2016, 10, 30),
//             priceInDollars: 1899,
//             displaySizeInInches: 17.3
//         }),
//         new Laptop({
//             model: 'Asus G757',
//             releaseDate: new Date(2016, 11, 3),
//             priceInDollars: 2199,
//             displaySizeInInches: 17.6
//         }),
//         new Laptop({
//             model: 'Asus G758',
//             releaseDate: new Date(2016, 11, 4),
//             priceInDollars: 2299,
//             displaySizeInInches: 18.2
//         }),
//         new Laptop({
//             model: 'Asus G759',
//             releaseDate: new Date(2016, 11, 5),
//             priceInDollars: 2399,
//             displaySizeInInches: 18.2
//         }),
//         new Laptop({
//             model: 'Asus G760',
//             releaseDate: new Date(2016, 11, 6),
//             priceInDollars: 2799,
//             displaySizeInInches: 18.2
//         })
//     ];

//     for (var index in laptops) {
//         laptops[index].save();
//     }
// }

// fillComputersData();