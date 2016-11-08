var events = require('events');
var publishingCompany = new events.EventEmitter();

var onNewBook = function(err, title) {
    console.log('Yay, a new book! %s', title);
};

publishingCompany.on('publish', function() {
    onNewBook(null, 'Learning Node.js');
})

publishingCompany.emit('publish');

