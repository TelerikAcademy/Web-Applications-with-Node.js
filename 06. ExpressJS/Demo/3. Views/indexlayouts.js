var express = require('express'),
    path = require('path');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/:viewname', function (req, res) {
    res.render(req.params.viewname);
});

app.listen(3000);
