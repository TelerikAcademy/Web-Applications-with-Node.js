/* globals process */

const print = (text) => {
    process.stdout.write(text);
};

const printLine = (text) => {
    console.log(text);
};


module.exports = { print, printLine };
