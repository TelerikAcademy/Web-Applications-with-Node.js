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

const modelSchema = mongoose.Schema({
    model: String,
    releaseDate: Date,
    priceInDollars: Number,
    displaySizeInInches: Number
});
const modelName = 'Laptop';

const Laptop = mongoose.model(modelName, modelSchema);

// const asus = new Laptop({
//     model: 'Asus G752',
//     releaseDate: new Date(2016, 10, 29),
//     priceInDollars: 'fasfafsa',
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
// const laptopSchema = mongoose.Schema({
//     model: String,
//     releaseDate: Date,
//     priceInDollars: Number,
//     displaySizeInInches: Number
// });

// // Instance methods don't work with arrow functions because of the nature of 'this' keyword
// laptopSchema.methods.getDetailedDescription = function () {
//     const productDescription =
//         `Product description:
//         Model: ${this.model}
//         Release date: ${this.releaseDate}
//         Price: ${this.priceInDollars}$
//         Display size: ${this.displaySizeInInches}''`;

//     return productDescription;
// };

// const modelName = 'Laptop';
// const Laptop = mongoose.model(modelName, laptopSchema);

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
//     Working with virtual properties
// ========================================

// const hamsterSchema = mongoose.Schema({
//     name: String,
//     kolibka: { type: Number, required:true, min: 10, max: 60}
// });

// hamsterSchema.virtual('CurrentDate').get(function(){
//     return Date.now();
// });

// const Hamster = mongoose.model('Hamster', hamsterSchema);
// const hamsterObject = new Hamster({
//     name: 'Pesho',
//     kolibka: 30
// });

// hamsterObject.save((err, savedHamster)=> {
//     console.log(savedHamster.CurrentDate);
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

const productId = '582ae9dea411eb534839a7ec';
// const filter = {
//     priceInDollars: { $gt: 1200, $lt: 1600}
// };

// Laptop.find(filter, (err, laptops) => {
//     for(let i = 0; i< laptops.length; i+=1){
//         console.log(laptops[i]);
//     }
// });

// Laptop.findByIdAndUpdate(
//     productId,
//     { $set: { priceInDollars: 1500 } },
//     { new: true },
//     (err, result) => {
//         console.log(result);
//     })

// Laptop.findById(productId, (err, laptop) => {
//     console.log(laptop.getDetailedDescription());
// });

const query = Laptop.find()
    .where({
        model: new RegExp('asus', 'i')
    })
    .and({
        priceInDollars: {
            $lt: 3000,
            $gt: 1600
        }
    })
    .sort({
        priceInDollars: 'desc'
    })
    .skip(3)
    .limit(3);


query.exec();

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
//     }, // Number validator
//     releaseDate: {
//         type: Date,
//         default: Date.now
//     }
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

// const numberValidator = [
//     function (val) {
//         return ((val % 2) === 0);
//     },
//     'The number assigned is odd. Only even numbers allowed'
// ]

// const numbersSchema = mongoose.Schema({
//     value: {
//         type: Number,
//         required: true,
//         validate: function (v) {
//             return v % 2 === 0;
//         }
//     }
// });

// const Num = mongoose.model('Num', numbersSchema);
// const myNum = new Num({
//     value: 3
// });

// myNum.save((err, result) => {
//     console.log(err);
//     console.log(result);
// })

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