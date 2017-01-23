var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var model = {
    title: 'Erick Sauri - Trump Card',
    viewId: 'trump-card',
    projectTitle: 'Trump Card'
  };

  res.render('./projects/trumpcard', model);
});

module.exports = router;
