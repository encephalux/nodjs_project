const env = require("@encephalux/env");
require("./managers");
require("./middleware");
require("./controllers");
require("./models");
const express = require("express");

const app = express();

app.use("/", require("./routes"));

module.exports = app;