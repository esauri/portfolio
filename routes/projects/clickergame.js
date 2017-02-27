var express = require('express');
var router = express.Router();

/* GET clickergame page. */
router.get('/', function(req, res, next) {
  var model = require('../../model/global')(req, res);
  
  model.viewId = 'clicker-game';
  model.title += ' - Clicker Game';
  model.projectTitle = 'Clicker Game';

  res.render('./projects/clickergame', model);
});

module.exports = router;
