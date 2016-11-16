'use strict';

let express = require('express');

let app = express();

let port = 3001;

app.listen(port, () => console.log(`Server running http://localhost:${port}`));