const express = require('express');
const web = express.Router();

web.get("/", (req, res) => {
    res.render("home");
});

web.get("/profile", (req, res) => {
    res.render("profile");
});

module.exports = web;