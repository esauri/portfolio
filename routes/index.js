var express = require('express');
var router = express.Router();

const projects = [
      {
        name: 'twosevenzero',
        title: '270',
        category: 'Ionic Framework',
        link: '/270',
        description: 'Race to the White House',
        image: './img/270.png'
      },
      {
        name: 'clickergame',
        title: 'Clicker Game',
        link: '/clickergame',
        category: 'Javascript',
        description: 'Save Bob!',
        image: './img/clickergame.png'
      },
      {
        name: 'nest',
        title: 'Nest',
        link: '/nest',
        category: 'Javascript',
        description: 'Join the flock',
        image: './img/nestchat.png'
      },
      {
        name: 'admitone',
        title: 'Admit One ',
        link: '/admitone',
        category: 'Illustrator',
        description: 'Find out what\'s happening',
        image: './img/admitone.jpg'
      },
      {
        name: 'audiovisualizer',
        title: 'Audio Visualizer',
        link: '/audiovisualizer',
        category: 'Javascript',
        description: 'Visualize audio',
        image: './img/audiovisualizer.png'
      }
    ];

/* GET home page. */
router.get('/', function(req, res, next) {
  var model = {
    title: 'Erick Sauri',
    project: projects
  };

  res.render('index', model);
});

module.exports = router;
