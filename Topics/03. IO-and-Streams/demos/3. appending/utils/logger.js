/* globals module require */

const DATE_FORMAT = "HH:mm:ss, YYYY-MM-DD";

const fs = require("fs"),
    os = require("os");

const moment = require("moment");

function createDirIfNeccessary(fileName) {
    const index = fileName.lastIndexOf("/");
    if (index < 0) {
        return;
    }

    let dirName = fileName.substr(0, index);

    if (!fs.existsSync(dirName)) {
        fs.mkdirSync(dirName);
    }
}


class Logger {
    constructor(fileName) {
        this.fileName = fileName;
        createDirIfNeccessary(this.fileName);
    }

    log(text) {
        let date = moment().format(DATE_FORMAT);
        var log = `[${date}] ${text} ${os.EOL}`;
        fs.appendFileSync(this.fileName, log, "utf8");
    }
}

module.exports.getLogger = function(fileName) {
    return new Logger(fileName);
};