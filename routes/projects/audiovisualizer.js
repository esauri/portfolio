var express = require('express');
var router = express.Router();

/* GET audiovisualizer page. */
router.get('/', function(req, res, next) {
  var model = require('../../model/global')(req, res);
  
  model.viewId = 'audio-visualizer';
  model.title += ' - Audio Visualizer';
  model.projectTitle = 'Audio Visualizer';

  res.render('./projects/audiovisualizer', model);
});

module.exports = router;
