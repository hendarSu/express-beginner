const express = require('express');

// Routers
const api = require('./api');
const login = require('./login');
const web = require('./web');

// Setup Router
const router = express.Router();
router.use("/login", login);
router.use("/api", api);
router.use("/", web);

module.exports = router;