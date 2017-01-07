import React from 'react';
import { Link } from 'react-router';
import Project from './../../views/home/Project';

// ProjectPanel class
export default class ProjectPanel extends React.Component {
  constructor() {
    super();
  }

  /**
   * togglePanel - calls the togglePanel function in Header to close the panel
   * @function togglePanel
   */
  togglePanel() {
    // Call the toggleProjectPanel function in Header
    this.props.toggleProjectPanel();
  }
// onClick={this.togglePanel.bind(this)}
//<li className='project-item'>
//   <Link activeClassName='active' onClick={this.togglePanel.bind(this)} to='/270'>
//     <section id='twosevenzero' className='project-image'></section>
//     <h4>270</h4>
//   </Link>
// </li>
// <li className='project-item'>
//   <Link activeClassName='active' onClick={this.togglePanel.bind(this)} to='/clickergame'>
//     <section id='clickergame' className='project-image'></section>
//     <h4>Clicker Game</h4>
//   </Link>
// </li>
// <li className='project-item'>
//   <Link activeClassName='active' onClick={this.togglePanel.bind(this)} to='/nest'>
//   <section id='nest' className='project-image'></section>
//     <h4>Nest</h4>
//   </Link>
// </li>
// <li className='project-item'>
//   <Link activeClassName='active' onClick={this.togglePanel.bind(this)} to='/admitone'>
//   <section id='admitone' className='project-image'></section>
//     <h4>Admin One</h4>
//   </Link>
// </li>
// <li className='project-item'>
//   <Link activeClassName='active' onClick={this.togglePanel.bind(this)} to='/audiovisualizer'>
//   <section id='audiovisualizer' className='project-image'></section>
//     <h4>Audio Visualizer</h4>
//   </Link>
// </li>
  /**
   * render - Renders the ProjectPanel
   * @function render
   * @return {HTMLElement} returns Nav element
   */
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
    // If panel is open set class
    const panelClass = (this.props.panelOpen) ? 'open' : '';

    /**
     * There should be a way to check for active
     * if location.pathname matches text
     * then add className active or something
     */
    return (
      <nav id='project-panel' className={panelClass}>
        <button id='project-panel-close-button'>Close</button>
        <ul>
          {Projects}
        </ul>
      </nav>
    );
  }
}
