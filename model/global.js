const projects = [{
        name: 'two-seven-zero',
        title: '270',
        category: 'Angular • Ionic Framework',
        link: '/270',
        description: 'Race to the White House',
        image: './img/270.png',
        bool: true
      },
      {
        name: 'trump-card',
        title: 'Trump Card',
        link: '/trumpcard',
        category: 'Swift 3',
        description: 'Deal me in',
        image: './img/nestchat.png'
      },
      {
        name: 'clicker-game',
        title: 'Clicker Game',
        link: '/clickergame',
        category: 'Javascript',
        description: 'Save Bob!',
        image: './img/clickergame.png'
      },
      {
        name: 'audio-visualizer',
        title: 'Audio Visualizer',
        link: '/audiovisualizer',
        category: 'Javascript',
        description: 'Visualize audio',
        image: './img/audiovisualizer.png'
      }
];

function global(req, res) {
  return {
    // Always static
    title: 'Erick Sauri' ,
    viewId: '',
    projects: projects,
    currentYear: new Date().getFullYear()
  };
}

module.exports = global;
