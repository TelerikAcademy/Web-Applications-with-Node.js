var fs = require("fs");
var fileContent = fs.readFileSync("./app.js", "utf8");
console.log(fileContent);
