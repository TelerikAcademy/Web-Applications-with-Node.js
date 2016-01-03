var express = require('express'),
    path = require('path');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(require('stylus').middleware(__dirname + '/public'));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.render('stylus');
});


app.listen(3000);
