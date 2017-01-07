var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('./projects/twosevenzero', { title: '270' });
});

module.exports = router;
