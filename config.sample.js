const env = require("@encephalux/env");

process.env.RUN_MODE = "development";
env.RUN_MODE = process.env.RUN_MODE;

process.env.APP_PORT = 3000;