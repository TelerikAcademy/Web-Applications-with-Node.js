'use strict';

let express = require('express'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose');

let dbPath = 'mongodb://localhost/demoApp';

mongoose.connect(dbPath);

require('./models');
let Category = mongoose.model('Category');

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

require('./routes')(app);

let port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App running at http://localhost:${port}`));