const env = require("@encephalux/env");
const express = require("express");
const mdw = require("../middleware");
const ctrl = require("../controllers");

const router = express.Router();


router.get("/", async (_req, _res) => {
    _res.end("Welcome! Project initialized.");
});


module.exports = router;
