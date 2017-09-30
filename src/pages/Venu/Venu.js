import React from 'react';
// import Zooming from 'zooming';
import { connect } from 'react-redux';
import TiDevicePhone from 'react-icons/lib/ti/device-phone';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import TiCalendarOutline from 'react-icons/lib/ti/calendar-outline';
import TiGroup from 'react-icons/lib/ti/group';
import Tag from './../../components/Tag/Tag';
import Tags from './../../components/Tags/Tags';
import Vimeo from './../../components/Vimeo/Vimeo';
import Button from './../../components/Button/Button';
import Banner from './../../components/Banner/Banner';
import ProjectDetail from './../../components/ProjectDetail/ProjectDetail';
import CallToAction from './../../components/CallToAction/CallToAction';
import ProjectDetailContainer from './../../components/ProjectDetailContainer/ProjectDetailContainer';
import VenuBanner from './../../assets/img/venu/thumbnail.jpeg';

const Venu = ({ mobile }) => (
  <article>
    {/* Banner */}
    <Banner
      isMobile={mobile}
      src={VenuBanner}
      invert
    />
    {/* Content */}
    <section className={'wrapper'}>
      {/* Intro */}
      <h2>VENU</h2>
      {/* Project Details */}
      <ProjectDetailContainer>
        <ProjectDetail>
          <TiDevicePhone /> Web App Development
        </ProjectDetail>
        <ProjectDetail>
          <TiGroup /> Team Project
        </ProjectDetail>
        <ProjectDetail>
          <TiCalendarOutline /> Spring 2017
        </ProjectDetail>
      </ProjectDetailContainer>
      {/* Tags */}
      <Tags>
        <Tag>ReactJS</Tag>
        <Tag>Redux</Tag>
        <Tag>Firebase</Tag>
        <Tag>PWA</Tag>
        <Tag>Web App Dev</Tag>
      </Tags>
      {/* Description */}
      <h3>Description</h3>
      <p>
        VENU is a wayfinding application created specifically for Imagine RIT, a festival
        of creativity and innovation held every year at Rochester Institute of Technology.
        We recognized that large events like Imagine RIT are hecting and confusing to people.
        Finding a specific facility or booth is frustrating, and other attendees miss out on great
        opportunities during the event.
      </p>
      <h3>Goal</h3>
      <p>
        With VENU we wanted to create a personalized experience by making recommendations based on interests
        and helping navigate large events such as Imagine RIT. We wanted to test our app on this festival as over 30,000 people attend each year.
      </p>
      <h3>Role</h3>
      <p>
        For this project my main role was working as the developer for the app. After some deliberation with the team over to create
        a mobile or a web app we settled on creating a web app since it was more accessible for users to access it via the browser than having
        to download an app from the store. Since our app was targeted at Imagine RIT, an event held only once a year we figured more people would be
        willing to try it out if we minimized the hassle.
      </p>
      <h3>Technology</h3>
      <p>
        To create the web app I decided to create the front end with React and manage the state with Redux.
        Since it was my first time working with that library and doing any sort of flux-like state management I decided
        to try out some tutorials to get to know React. For the backend we decided on using Firebase as it allowed us to utilize their
        Authentication and Realtime Database with ease and allowed me to focus on the front-end. We also ended up using their Hosting platform to host the <a href={'https://ritvenu.com'} target={'_blank'}>app</a>.
      </p>
    </section>
    <section className={'wrapper'}>
      <h3>Video</h3>
      <Vimeo
        title={'VENU Demo'}
        src={'https://vimeo.com/219845941'}
      />
    </section>
    {/* CTA */}
    <CallToAction>
      <h3>Want to check out the repo?</h3>
      {/* Github */}
      <a href={'https://github.com/TeamVenu/venu'} target={'_blank'} rel={'noopener noreferrer'}>
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

export default connect(mapStateToProps)(Venu);
