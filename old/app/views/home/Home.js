import React from 'react';
import Article from '../../components/layout/Article';
import Project from './Project';

export default class Home extends React.Component {
  constructor() {
    super();
  }

  render() {
    // Projects JSON
    const Projects = [
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
    ].map((project, i) => <Project key={i} project={project} />);

    // Cache the classes
    const articleClasses = 'projects';
    const articleContent = {Projects}

    return (
      <article className='container case-study'>
        <ul className='projects'>
        {Projects}
        </ul>
  		</article>
    );
  }
}
