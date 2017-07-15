import React, { Component } from 'react';
import styles from './styles.module.css';

import Navigation from './../Navigation/Navigation';
import Footer from './../../components/Footer/Footer';

// Assets
import AudioVisThumbnail from './../../assets/img/audiovisualizer/public/small/thumbnail.jpg';
import ClickerThumbnail from './../../assets/img/clickergame/public/small/thumbnail.jpg';
import TrumpCardThumbnail from './../../assets/img/trumpcard/public/small/thumbnail.jpg';
import TwoSevenZeroThumbnail from './../../assets/img/270/public/small/thumbnail.jpg';

class Main extends Component {
  render() {
    const projects = [
      {
        id: 0,
        name: '270',
        link: '/twosevenzero',
        desc: 'Race to the White House',
        tags: ['AngularJS', 'Ionic', 'Mobile Development'],
        thumbnail: {
          src: TwoSevenZeroThumbnail,
          desc: '270 Thumbnail',
        },
      },
      {
        id: 1,
        name: 'Trump Card',
        link: '/trumpcard',
        desc: 'Make America Great Again',
        tags: ['Mobile Development', 'Swift'],
        thumbnail: {
          src: TrumpCardThumbnail,
          desc: 'Trump Card Thumbnail',
        },
      }
    ];

    const playground = [
      {
        id: 0,
        name: 'Clicker Game',
        link: '/clickergame',
        desc: 'Save Bob!',
        tags: ['Canvas', 'Game Development', 'Javascipt'],
        thumbnail: {
          src: ClickerThumbnail,
          desc: 'Clicker Game Thumbnail',
        },
      },
      {
        id: 1,
        name: 'Audio Visualizer',
        link: '/audiovisualizer',
        desc: '',
        tags: ['Canvas', 'Javascript', 'Web App Development', 'Web Audio'],
        thumbnail: {
          src: AudioVisThumbnail,
          desc: 'Audio Visualizer Thumbnail',
        },
      }
    ];

    return (
      <article className={styles.container}>
        <Navigation projects={projects} playground={playground} />
        { this.props.children }
        <Footer>
          <p>&copy; 2017 Erick Sauri</p>
        </Footer>
      </article>
    );
  }
}

export default Main;
