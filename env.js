const env = require("@encephalux/env");

env.APP_NAME = "app";
env.APP_PORT = 3000;
env.APP_URL_BASE = `http://localhost:${process.env.APP_PORT}`;

module.exports = env;