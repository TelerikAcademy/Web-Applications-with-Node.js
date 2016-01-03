var Readable = require('stream').Readable;
var util = require('util');
util.inherits(Counter, Readable);

function Counter(opt) {
    Readable.call(this, opt);
    this._max = 10000;
    this._index = 1;
}

Counter.prototype._read = function() {
    var i = this._index++;
    if (i > this._max)
        this.push(null);
    else {
        var str = '' + i;
        var buf = new Buffer(str, 'ascii');
        this.push(buf);
    }
};

var counter = new Counter();
counter.on('data', function(data) {
    console.log(data.toString('ascii'));
});