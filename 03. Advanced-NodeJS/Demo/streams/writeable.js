var fs = require('fs');

var writeStream = fs.createWriteStream('writeStreamFile.txt');

writeStream.write('Some text, written using a writeable stream');
writeStream.end();