const express = require('express');
const router = express.Router();
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { az: process.env.AZ });
});

module.exports = router;
