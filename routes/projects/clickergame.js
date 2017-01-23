var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var model = {
    title: 'Erick Sauri - Clicker Game',
    viewId: 'clicker-game',
    projectTitle: 'Clicker Game'
  };

  res.render('./projects/clickergame', model);
});

module.exports = router;
