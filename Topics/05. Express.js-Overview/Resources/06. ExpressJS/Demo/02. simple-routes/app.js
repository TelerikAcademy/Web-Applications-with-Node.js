'use strict';

let express = require('express');

let app = express();


app.get('/', function(req, res) {
  res.send('It works!');
});

let port = 3002;

app.listen(port, () => console.log(`Server running http://localhost:${port}`));