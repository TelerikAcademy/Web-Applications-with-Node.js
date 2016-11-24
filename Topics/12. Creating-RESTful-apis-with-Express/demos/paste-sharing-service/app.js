'use strict';

const PORT = 3001;

const app = require('./config/app-config');

// attach routing
require('./routing')(app);

app.listen(PORT, () => console.log(`Magic happening on http://localhost:${PORT}`));