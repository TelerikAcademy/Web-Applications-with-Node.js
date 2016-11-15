/* globals require console __dirname*/

function getNextRandomNumber() {
    return 0 | Math.random() * (1 << 20);
}

const fs = require("fs"),
    path = require("path");

var dir = path.join(__dirname, "files");

if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
}

const rand = getNextRandomNumber();

const fileName = path.join(dir, `output-${rand}.txt`);

fs.writeFileSync(fileName, "It works!", "utf8");