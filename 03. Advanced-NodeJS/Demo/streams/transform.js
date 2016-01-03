var fs = require('fs');
var zlib = require('zlib');

var gzip = zlib.createGzip();
var readStream = fs.createReadStream('sampleFile.txt');
var writeStream = fs.createWriteStream('compressedFile.txt.gz');

readStream.pipe(gzip).pipe(writeStream).on('finish', function () {
    console.log('Compressed successfully');
});