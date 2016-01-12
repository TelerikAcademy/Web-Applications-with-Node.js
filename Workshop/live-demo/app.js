// app.js

'use strict';

let express = require('express');

let app = express();

require('./config')(app);

require('./models');

require('./routers')(app);

let port = process.env.PORT || 3001;

app.listen(port, () => console.log(`App running at port ${port}`));