var express = require('express');
var router = express.Router();

/* GET 270 page. */
router.get('/', function(req, res, next) {
  var model = require('../../model/global')(req, res);
  
  model.viewId = 'two-seven-zero';
  model.title += ' - 270';
  model.projectTitle = '270';

  res.render('./projects/twosevenzero', model);
});

module.exports = router;
