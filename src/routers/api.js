const express = require("express");
const api = express.Router();
const users = [];

// Skeleton API CRUD USERS.
api.get("/users", (req, res) => {
    res.status(200).json({
        "status" : "success",
        "message" : "Data List Users",
        "data" : users
    });
});

api.post("/users", (req, res) => {
    const { name, address } = req.body;

    const newUser = {
        id: users.length + 1,
        name, 
        address
    };

    users.push(newUser);

    res.status(201).json({
        "status" : "success",
        "message" : "Data user berhasil di simpan",
        "data" : newUser
    });
});

api.patch("/users/:id", (req, res) => {

});

api.delete("/users/:id", (req, res) => {

});

module.exports = api;