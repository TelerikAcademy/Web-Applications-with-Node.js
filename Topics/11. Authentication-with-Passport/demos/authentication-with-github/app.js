'use strict';

const PORT = 3001;

const app = require('./config/app');

app.listen(PORT, () => console.log(`Magic happening at http://localhost:${PORT}`));