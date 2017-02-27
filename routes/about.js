var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  var model = require('../model/global')(req, res);
  model.viewId = 'about';
  model.title += ' - About';
  res.render('about', model);
});

module.exports = router;
