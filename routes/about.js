var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  var model = {
    title: 'Erick Sauri'
    };

  res.render('about', model);
});

module.exports = router;
