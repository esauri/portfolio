import React from 'react';
import { connect } from 'react-redux';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import FaGamepad from 'react-icons/lib/fa/gamepad';
import TiCalendarOutline from 'react-icons/lib/ti/calendar-outline';

// Components
import Tag from './../../components/Tag/Tag';
import Tags from './../../components/Tags/Tags';
import Vimeo from './../../components/Vimeo/Vimeo';
import Banner from './../../components/Banner/Banner';
import Button from './../../components/Button/Button';
import Carousel from './../../components/Carousel/Carousel';
import CallToAction from './../../components/CallToAction/CallToAction';
import ProjectDetail from './../../components/ProjectDetail/ProjectDetail';
import ProjectDetailContainer from './../../components/ProjectDetailContainer/ProjectDetailContainer';

// Assets
import ClickerGameBanner from './../../assets/img/clickergame/public/large/banner.jpg';
import SplashscreenImg from './../../assets/img/clickergame/public/small/splashscreen.jpg';
import InstructionsImg from './../../assets/img/clickergame/public/small/instructions.jpg';
import GameImg from './../../assets/img/clickergame/public/small/gameView.jpg';
import PauseImg from './../../assets/img/clickergame/public/small/pausegame.jpg';
import GameOverImg from './../../assets/img/clickergame/public/small/gameover.jpg';

const ClickerGame = ({ mobile }) => (
  <article>
    {/* Banner */}
    <Banner
      isMobile={mobile}
      src={ClickerGameBanner}
      invert
    />
    {/* Content */}
    <section className={'wrapper'}>
      {/* Intro */}
      <h2>Clicker Game</h2>
      {/* Project Details */}
      <ProjectDetailContainer>
        <ProjectDetail>
          <FaGamepad /> Game Development
        </ProjectDetail>
        <ProjectDetail>
          <TiCalendarOutline /> Winter 2015
        </ProjectDetail>
      </ProjectDetailContainer>
      {/* Tags */}
      <Tags>
        <Tag>Canvas</Tag>
        <Tag>Game Dev</Tag>
        <Tag>Javascript</Tag>
      </Tags>
      {/* Description */}
      <h3>Save Bob!</h3>
      <p>
        Bob is stuck and it needs your help.
        Bob is surrounded by a strange alien
        species the is prone to quickly enrage
        and attack Bob! You must click on them
        before they enrage else Bob will be hurt.
        By clicking on enemies you can also give
        Bob time to heal and provide shields that
        protect him from attacks.
      </p>
      {/* Goal */}
      <h3>Goal</h3>
      <p>
      Clicker Game was an assignment where we had to create a web game
      using canvas. The goal of the game is to click on enemies before
      they get angry. Failing to do so will allow them to hurt Bob and
      when Bob's health reaches zero the game is over. Clicking on enemies
      can also heal Bob or grant it protective shields so it can deter coming
      attacks. For media the popping sound emitted when clicking an enemy was
      made by <a href={'https://freesound.org/people/greenvwbeetle/sounds/244657/'} target={'_blank'} rel={'noopener noreferrer'}>greenvwbeetle</a> and
      the shield sound is by <a href={'https://freesound.org/people/thehorriblejoke/sounds/198969/'} target={'_blank'} rel={'noopener noreferrer'}>thehorriblejoke</a>.
      The art is slightly edited by me but was created by <a href={'http://www.kenney.nl'} target={'_blank'} rel={'noopener noreferrer'}>Kenney Vleugels</a>.
      </p>
    </section>
    <section className={'wrapper'}>
      {/* Video */}
      <h3>Gameplay</h3>
      <Vimeo
        title={'Clicker Game Demo'}
        src={'https://player.vimeo.com/video/183410426'}
      />
    </section>
    <section className={'wrapper'}>
      <h3>Screenshots</h3>
      {/* Carousel */}
        <Carousel showButtons>
          <img alt={'Clicker Game Splash Screen'} src={SplashscreenImg} />
          <img alt={'Clicker Game How to Play'} src={InstructionsImg} />
          <img alt={'Clicker Game'} src={GameImg} />
          <img alt={'Clicker Game Pause'} src={PauseImg} />
          <img alt={'Clicker Game Over'} src={GameOverImg} />
        </Carousel>
      </section>
      <section className={'wrapper'}>
      {/* Conclusion */}
      <h3>Reflections</h3>
      <p>
        I enjoyed making this project I found it
        interesting to work with canvas and javascript
        to make something easily playable on most browsers.
        Overall I would have liked to made the enemy sprites
        rounder like a circle inside of a rectangle so it would
        be easier to click on them. If I were to continue working
        on it I would add new levels so that you feel like you progress
        beyond the tutorial without just having the free for all level.
      </p>
    </section>
    <CallToAction>
      <h3>Want to check out the repo?</h3>
      {/* Github */}
      <a href={'https://github.com/esauri/clickergame'} target={'_blank'} rel={'noopener noreferrer'}>
        <Button>
          <TiSocialGithub size={28} /> View Project
        </Button>
      </a>
    </CallToAction>
  </article>
);

const mapStateToProps = state => {
  return {
    mobile: state.global.mobile,
  };
}

export default connect(mapStateToProps)(ClickerGame);
