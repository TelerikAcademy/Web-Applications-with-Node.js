var fs = require('fs');

var exampleDirectory = 'sampleDirectory';
var sampleFile = 'test.txt';

if (!fs.existsSync(exampleDirectory)) {
    fs.mkdirSync(exampleDirectory);
}

var file = exampleDirectory + '/' + sampleFile;
fs.exists(file, function (exists) {
    if (!exists) {
        fs.writeFile(file, 'some text', function (err) {
            console.log('File was written!');
            readfile();
        });
    } else {
        readfile();
    }
});

var readfile = function () {
    fs.readFile(file, function (err, data) {
        console.log(data);
    });
}