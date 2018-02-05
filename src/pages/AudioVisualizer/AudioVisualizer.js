import React from 'react';
import { Link } from 'react-router-dom';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import TiDeviceDesktop from 'react-icons/lib/ti/device-desktop';
import TiCalendarOutline from 'react-icons/lib/ti/calendar-outline';

// Components
import Row from './../../components/Row/Row';
import Tag from './../../components/Tag/Tag';
import Tags from './../../components/Tags/Tags';
import Card from './../../components/Card/Card';
import Vimeo from './../../components/Vimeo/Vimeo';
import Button from './../../components/Button/Button';
import Banner from './../../components/Banner/Banner';
import Column from './../../components/Column/Column';
import CallToAction from './../../components/CallToAction/CallToAction';
import ProjectDetail from './../../components/ProjectDetail/ProjectDetail';
import ProjectDetailContainer from './../../components/ProjectDetailContainer/ProjectDetailContainer';

// Assets
import AudioVisualizerBanner from './../../assets/img/audiovisualizer/public/large/banner.jpg';

// Utils
import projects from './../../utils/getProjectList';

export default ({ route }) => (
  <article>
    {/* Banner */}
    <Banner src={AudioVisualizerBanner} invert/>
    {/* Content */}
    <section className={'wrapper'}>
        {/* Intro */}
        <h2>Audio Visualizer</h2>
        {/* Project Details */}
        <ProjectDetailContainer>
          <ProjectDetail>
            <TiDeviceDesktop /> Web Application
          </ProjectDetail>
          <ProjectDetail>
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
          by <a href={'http://loswalters.com/'} target={'_blank'} rel={'noopener noreferrer'}>Los Wálters</a>,
          <em>Soñar es mi juego</em> by <a href={'http://tototomas.com/'} target='_blank' rel={'noopener noreferrer'}>Tototomás</a>,
          <em>'Cause I'm a man</em> by <a href={'http://www.tameimpala.com/'} target='_blank' rel={'noopener noreferrer'}>Tame Impala</a>,
          and <em>Lux Aeterna</em> by <a href={'https://www.youtube.com/watch?v=W2JTwoO0geM'} target={'_blank'} rel={'noopener noreferrer'}>Clint Mastell</a>.
        </p>
      </section>
      <section className={'wrapper'}>
        {/* Video */}
        <h3>Demo</h3>
        <Vimeo
          title={'Audio Visualizer Demo'}
          src={'https://player.vimeo.com/video/183408638'}
        />
      </section>
      <section className={'wrapper'}>
        {/* Conclusion */}
        <h3>Parting Thoughts</h3>
        <p>
          Working with canvas and audio was a great
          exercise as it helped me improve and learn
          more using Javascript. I was able to see its
          strength when combined with HTML and CSS to
          make awesome web applications. The audio visualizer
          was also a big stepping stone as it aided me when
          creating <Link to={'/clickergame'}>Clicker Game</Link>.
        </p>
    </section>
    <CallToAction>
      <h3>Want to check out the repo?</h3>
      {/* Github */}
      <a href={'https://github.com/esauri/audiovisualizer'} target={'_blank'} rel={'noopener noreferrer'}>
        <Button>
          <TiSocialGithub size={28} /> View Project
        </Button>
      </a>
    </CallToAction>
    <Row wrap>
      {
        projects
          .filter((project) => project.link !== route)
          .map((project, index, list) => {
            return (
              <Column key={index} space={parseInt(100 / list.length, 10)} full>
                <Card
                  project={project}
                />
              </Column>
            );
          })
      }
    </Row>
  </article>
);
