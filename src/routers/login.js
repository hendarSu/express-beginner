const express = require("express");
const pasport = require("../middlewares/pasport");
const login = express.Router();

const account = {
    username : "anak@binar.com",
    password : "qwertyasd123"
};

login.post("/",[pasport], (req, res) => {
    res.status(200).json({
        status: "success",
        message : "Berhasil Login!",
        data : account
    });
});

module.exports = login;