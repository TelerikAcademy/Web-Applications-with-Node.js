// app.js

'use strict';

let express = require('express'),
  mongoose = require('mongoose'),
  bodyParser = require('body-parser'),
  path = require('path');

let connectionString = "mongodb://localhost/it-gallery";
mongoose.connect(connectionString);

require('./models');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'jade');

app.get('/', function(req, res) {
  res.redirect('/home');
});

require('./routers')(app);

let port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App running at port ${port}`));