/* globals require console */

const config = require("./config");

const app = require("./config/application");

const data = require("./data")(config);

require("./routers")(app, data);

app.listen(config.port, () => console.log(`Running at :${config.port}`));