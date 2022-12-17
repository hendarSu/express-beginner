const express = require('express');

// Routers
const api = require('./api');
const web = require('./web');

// Setup Router
const router = express.Router();
router.use("/api", api);
router.use("/", web);

module.exports = router;