const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({version: b, ok: true, status: 200})
});

module.exports = router;