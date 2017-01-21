var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var model = {
    title: 'Erick Sauri - 270',
    viewId: 'two-seven-zero',
    headerClass: 'dark'
  };

  res.render('./projects/twosevenzero', model);
});

module.exports = router;
