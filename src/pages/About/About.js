import React from 'react';

// Components
import Row from './../../components/Row/Row';
import Tag from './../../components/Tag/Tag';
import Tags from './../../components/Tags/Tags';
import Card from './../../components/Card/Card';
import Column from './../../components/Column/Column';
import Button from './../../components/Button/Button';
import CallToAction from './../../components/CallToAction/CallToAction';

// Assets
import Avatar from './../../assets/img/misc/me.jpg';

// Utils
import links from './../../utils/getUsefulLinks';
import projects from './../../utils/getProjectList';

// Styles
import styles from './styles.module.css';

export default () => (
  <section className={styles.container}>
    {/* About Me */}
    <section className={'wrapper'}>
      <img className={'avatar'} src={Avatar} alt={'Erick Sauri'} title={'Erick Sauri'} />
      <header className={styles.resume_header}>
        <h2 className={styles.resume_title}>About Me</h2>
      </header>
      <p>
        Hey! I’m Erick Sauri a front end developer originally from Puerto Rico but currently
        living in Brooklyn. I'm a graduate from Rochester Institute of Technology
        with a Bachelor's in New Media Interactive Development and a minor
        in Mobile App Development. I enjoy working on web and mobile applications as well
        as making games in my spare time. Feel free to email me at <a href={`mailto:${links.email}`}>ericksaurisyl [at] gmail.com</a>.
      </p>
    </section>
    {/* Work */}
    <section className={'wrapper'}>
      <header className={styles.resume_header}>
        <h2 className={styles.resume_title}>Work</h2>
      </header>
      <Row wrap>
      <Column space={'100'}>
          {/* Patch Media */}
          <h3>Patch Media</h3>
          <h4>New York, NY (March 2018 - Present)</h4>
          <Tags>
            <Tag>Front End Developer</Tag>
          </Tags>
          <ul className={styles.resume_list}>
            <li className={styles.resume_list_item}>Optimized images using Fastly Image Optimization, implemented responsive images, and lazy loading for images below the fold</li>
            <li className={styles.resume_list_item}>Implemented a new, quicker content posting and replying experience for users to share what's happening in their local community</li>
            <li className={styles.resume_list_item}>Maintained and implemented new functionality for site and its CMS built on <strong>PHP</strong> and <strong>Drupal</strong></li>
            <li className={styles.resume_list_item}>Created new features using <strong>Vue</strong> and used APIs such as <strong>Google Analytics</strong>, <strong>DoubleClick</strong>, and <strong>Stripe</strong></li>
            <li className={styles.resume_list_item}>Participated in A/B and multivariate testing, utilizing tools such as <strong>Google Optimize</strong></li>
            <li className={styles.resume_list_item}>Created email templates for <em>daily newsletter</em>, <em>breaking news</em>, and weekly <em>community calendar events</em> campaigns</li>
          </ul>
        </Column>
        <Column space={'50'}>
          {/* Poseidon Systems */}
          <h3>Poseidon Systems</h3>
          <h4>Rochester, NY (May 2017 - Jan 2018)</h4>
          <Tags>
            <Tag>Software Engineer</Tag>
          </Tags>
          <ul className={styles.resume_list}>
            <li className={styles.resume_list_item}>Participated in redesign for a hybrid mobile and progressive web app</li>
            <li className={styles.resume_list_item}>Developed app front end using Angular and Ionic Framework</li>
            <li className={styles.resume_list_item}>Utilized libraries such as Highcharts for oil monitoring data visualization</li>
            <li className={styles.resume_list_item}>Performed back end tasks using Firebase for authentication, storage, cloud messaging, and database needs</li>
          </ul>
        </Column>
        <Column space={'50'}>
          {/* CACI */}
          <h3>CACI</h3>
          <h4>Rome, NY (Summer 2016)</h4>
          <Tags>
            <Tag>Web Developer</Tag>
          </Tags>
          <ul className={styles.resume_list}>
            <li className={styles.resume_list_item}>Tasked with maintaining and implementing admin features for a web app</li>
            <li className={styles.resume_list_item}>Utilized Node.js for server-side and an internal framework based on the MVC paradigm</li>
            <li className={styles.resume_list_item}>Performed database tasks with PostgreSQL</li>
            <li className={styles.resume_list_item}>Created unit and end to end tests using libraries like Mocha and Selenium</li>
          </ul>
        </Column>
      </Row>
    </section>
    {/* Education */}
    <section className={'wrapper'}>
      <header className={styles.resume_header}>
        <h2 className={styles.resume_title}>Education</h2>
      </header>
      <h3>Rochester Institute of Technology</h3>
      <h4>Rochester, NY (2013 - 2017)</h4>
      <h5>Bachelor's of Science</h5>
      <Tags>
        <Tag>New Media Interactive Development</Tag>
        <Tag>Mobile App Development</Tag>
      </Tags>
    </section>
    {/* Skills */}
    <section className={'wrapper'}>
      <header className={styles.resume_header}>
        <h2 className={styles.resume_title}>Skills &amp; Tools</h2>
      </header>
      <Tags>
        <Tag>HTML5</Tag>
        <Tag>CSS3</Tag>
        <Tag>SASS</Tag>
        <Tag>LESS</Tag>
        <Tag>Node</Tag>
        <Tag>Express</Tag>
        <Tag>Vue</Tag>
        <Tag>React</Tag>
        <Tag>React Native</Tag>
        <Tag>Redux</Tag>
        <Tag>Angular</Tag>
        <Tag>Rxjs</Tag>
        <Tag>Ionic</Tag>
        <Tag>PHP</Tag>
        <Tag>Drupal</Tag>
        <Tag>Swift</Tag>
        <Tag>C#</Tag>
        <Tag>MySQL</Tag>
        <Tag>PostgreSQL</Tag>
        <Tag>Fastly</Tag>
        <Tag>Sailthru</Tag>
        <Tag>Google Optimize</Tag>
        <Tag>Visual Studio</Tag>
        <Tag>Unity</Tag>
        <Tag>Photoshop</Tag>
        <Tag>Illustrator</Tag>
        <Tag>Sketch</Tag>
      </Tags>
    </section>
    {/* Recent Projects */}
    <section className={'wrapper'}>
      <header className={styles.resume_header}>
        <h2 className={styles.resume_title}>Recent Projects</h2>
      </header>
      <Row wrap>
        <Column space={'50'}>
          <h3>Thinking Cap</h3>
          <h4>Web App Development (Fall - Winter 2016)</h4>
          <Tags>
            <Tag>NodeJS</Tag>
            <Tag>MySQL</Tag>
          </Tags>
          <p>
            Thinking Cap is a web application that acts as a shell for various statistic games
            currently in development. My duties in this project were mainly focused on creating
            and developing the web application itself, client side scripts related to user
            interactions and widgets, as well as creating, managing, and linking the database to
            the web application so that data could be stored and accessed by the app. I also worked
            on initializing user authentication, email integration, and validation.
          </p>
        </Column>
        <Column space={'50'}>
          <h3>Trump Card</h3>
          <h4>iOS App Development (Winter 2016)</h4>
          <Tags>
            <Tag>Swift</Tag>
          </Tags>
          <p>
            Built in Swift, Trump Card is a take on the 2016
            presidential election where players take the role
            of then candidate Donald Trump. Set in a press conference,
            the player must answer various questions and is given two choices,
            which are based on statements he has said in the past. The player must choose
            which answer will better affect his standing in the polls while not angering Trump
            resulting in the most negative answer being forced.
          </p>
        </Column>
        <Column space={'50'}>
          <h3>270</h3>
          <h4>Hybrid App Development (Spring 2016)</h4>
          <Tags>
            <Tag>AngularJS</Tag>
            <Tag>Ionic Framework</Tag>
          </Tags>
          <p>
            270 is an U.S. historical and government trivia game where players choose a
            party and answer trivia to earn the 270 electoral votes needed to win the presidency.
          </p>
        </Column>
      </Row>
    </section>
    {/* CTA PDF version */}
    <CallToAction>
      <h3>Looking for a PDF of printable version of my resume?</h3>
      <a
        href={links.resume}
        target={'_blank'}
        rel={'noopener noreferrer'}
      >
      <Button>Resume</Button>
    </a>
    </CallToAction>
    {/* TODO: Contact Form */}
    <Row wrap>
      {
        projects
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
  </section>
);
