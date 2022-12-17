const express = require('express');
const webHandlerNotFound = require('../middlewares/web-handler-not-found');
const web = express.Router();

web.get("/", (req, res) => {
    res.render("home");
});

web.get("/profile", (req, res) => {
    res.render("profile");
});

web.get("/user", (req, res) => {
    res.render("user");
});

web.use(webHandlerNotFound);
module.exports = web;