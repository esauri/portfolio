var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var model = {
    title: 'Erick Sauri - Audio Visualizer',
    viewId: 'audio-visualizer',
    projectTitle: 'Audio Visualizer'
  };

  res.render('./projects/audiovisualizer', model);
});

module.exports = router;
