var express = require('express');
var router = express.Router();

/* GET trump-card page. */
router.get('/', function(req, res, next) {
  var model = require('../../model/global')(req, res);
  
  model.viewId = 'trump-card';
  model.title += ' - Trump Card';
  model.projectTitle = 'Trump Card';

  res.render('./projects/trumpcard', model);
});

module.exports = router;
