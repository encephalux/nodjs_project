const env = require("@encephalux/env");

env.APP_NAME = "app";
env.APP_PORT = 3000;
env.APP_URL_BASE = `http://localhost:${env.APP_PORT}`;
env.RUN_MODE = "development";

module.exports = env;