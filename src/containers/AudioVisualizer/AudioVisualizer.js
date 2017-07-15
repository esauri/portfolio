import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import TiDeviceDesktop from 'react-icons/lib/ti/device-desktop';
import TiCalendarOutline from 'react-icons/lib/ti/calendar-outline';

// Components
import Tag from './../../components/Tag/Tag';
import Tags from './../../components/Tags/Tags';
import Vimeo from './../../components/Vimeo/Vimeo';
import Button from './../../components/Button/Button';
import Banner from './../../components/Banner/Banner';
import ProjectDetail from './../../components/ProjectDetail/ProjectDetail';
import ProjectDetailContainer from './../../components/ProjectDetailContainer/ProjectDetailContainer';

// Assets
import AudioVisualizerBanner from './../../assets/img/audiovisualizer/public/large/banner.jpg';

// Styles
import styles from './styles.module.css';

class AudioVisualizer extends Component {
  render() {
    return (
      <article>
        {/* Banner */}
        <Banner src={AudioVisualizerBanner} invert>
          <section>
            <h2>Audio Visualizer</h2>
            <p>Visualize Audio</p>
          </section>
        </Banner>
        {/* Content */}
        <section className='wrapper'>
            {/* Intro */}
            <h2>Audio Visualizer</h2>
            {/* Project Details */}
            <ProjectDetailContainer className={styles.project_details}>
              <ProjectDetail className={styles.project_details_item}>
                <TiDeviceDesktop /> Web Application
              </ProjectDetail>
              <ProjectDetail className={styles.project_details_item}>
                <TiCalendarOutline /> Fall 2015
              </ProjectDetail>
            </ProjectDetailContainer>
            {/* Tags */}
            <Tags>
              <Tag>Canvas</Tag>
              <Tag>Javascript</Tag>
              <Tag>Web Audio Api</Tag>
            </Tags>
            {/* Description */}
            <h3>Description</h3>
            <p>
              The audio visualizer is a fun interactive
              application where audio nodes are translated
              into geometric forms by drawing them on a canvas.
              The audio visualizer is interactive as it also allows
              users to sketch things on the canvas and save them.
              The brush tool is directly influenced by the audio nodes.
              The user can also change the amplitude of the audio nodes,
              they can switch between audio being processed as a frequency
              or a wave length, they can delay the audio and change the color
              of the drawings. The audio visualizer comes with four songs <em>Toca Madera</em>
              by <a href='http://loswalters.com/' target='_blank' rel='noopener noreferrer'>Los Wálters</a>,
              <em>Soñar es mi juego</em> by <a href='http://tototomas.com/' target='_blank' rel='noopener noreferrer'>Tototomás</a>,
              <em>'Cause I'm a man</em> by <a href='http://www.tameimpala.com/' target='_blank' rel='noopener noreferrer'>Tame Impala</a>,
              and <em>Lux Aeterna</em> by <a href='https://www.youtube.com/watch?v=W2JTwoO0geM' target='_blank' rel='noopener noreferrer'>Clint Mastell</a>.
            </p>
            {/* Video */}
            <h3>Demo</h3>
            <Vimeo
              title={'Audio Visualizer Demo'}
              src={'https://player.vimeo.com/video/183408638'}
            />
            {/* Github */}
            <a href='https://github.com/esauri/audiovisualizer' target='_blank' rel='noopener noreferrer'>
              <Button>
                <TiSocialGithub size={28} /> View Project
              </Button>
            </a>
            {/* Conclusion */}
            <h3>Thoughts</h3>
            <p>
              Working with canvas and audio was a great
              exercise as it helped me improve and learn
              more using Javascript. I was able to see its
              strength when combined with HTML and CSS to
              make awesome web applications. The audio visualizer
              was also a big stepping stone as it aided me when
              creating <Link to='/clickergame'>Clicker Game</Link>.
            </p>
        </section>
      </article>
    );
  }
}

export default AudioVisualizer;
