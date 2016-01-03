var express = require('express');
var auth = require('http-auth');

var basic = auth.basic({
        realm: "Web."
    }, function (username, password, callback) { // Custom authentication method.
        callback(username === "userName" && password === "password");
    }
);

var app = express();

app.use(auth.connect(basic));

app.get('/', function (req, res) {
    res.send('Accessed authorized section');
});


app.listen(3000);