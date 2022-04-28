const express = require('express');
const HomeRouter = require('./home.routes');

const router = express.Router();

router.use('/', HomeRouter)

module.exports = router;