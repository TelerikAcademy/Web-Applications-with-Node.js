/* globals require console __dirname*/

const fs = require("fs"),
    path = require("path");

const fileName = path.join(__dirname, "app.js");


fs.readFile(fileName, "utf8", (err, fileContents) => {
    if (err) {
        throw err;
    }

    console.log("-".repeat(50));
    console.log("Asynchronous file read");
    console.log(fileContents);
});


let fileContens = fs.readFileSync(fileName, "utf8");
console.log("-".repeat(50));
console.log("Synchronous file read");
console.log(fileContens);