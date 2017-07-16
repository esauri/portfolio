import React, { Component } from 'react';

import Button from './../../components/Button/Button';
import CallToAction from './../../components/CallToAction/CallToAction';

// Assets
import Avatar from './../../assets/img/misc/me.jpg';

// Styles
import styles from './styles.module.css';

class About extends Component {
  render() {
    return (
      <section className={styles.container}>
        <section className='wrapper'>
          <img className={styles.avatar} src={Avatar} alt='Erick Sauri' title='Erick Sauri' />
          <p>
            Hey! I’m Erick Sauri a front end developer originally from Puerto Rico
            <span role='img' aria-label='Puerto Rican Flag Emoji'>🇵🇷</span> but currently
            living in Rochester, NY. I'm a graduate from Rochester Institute of Technology
            with a Bachelor's in New Media Interactive Development and a minor
            in Mobile App Development. I enjoy working on web and mobile applications as well
            as making games in my spare time. Feel free to email me at <a href='mailto:ejs3863@rit.edu'>ejs3863 at rit.edu</a>.
          </p>
        </section>
        {/* Resume Section */}
        <section className='wrapper'>
          <ul className={styles.list}>
            {/* Work */}
            <li className={styles.item}>
              <header className={styles.item_header}>
                <h2>Work</h2>
              </header>
              <ul className={styles.list}>
                <li>
                  {/* Poseidon Systems */}
                  <h3>Poseidon Systems</h3>
                  <h4>Rochester, NY (May 2017 - Present)</h4>
                  <h5>Front End Developer</h5>
                  <p>
                    Tasked to create a progressive web app using Ionic 3 and Angular.
                    Dealt with data visualization using libraries such as Highcharts.
                  </p>
                </li>
                <li>
                  {/* CACI */}
                  <h3>CACI</h3>
                  <h4>Rome, NY (Summer 2016)</h4>
                  <h5>Web Developer</h5>
                  <p>
                    Worked collaboratively in creating a web application
                    utilizing Node, Express, and Postgresql.
                    Utilized the MVC model and client side programming.
                  </p>
                </li>
              </ul>
            </li>
            {/* Education */}
            <li className={styles.item}>
              <header className={styles.item_header}>
                <h2>Education</h2>
              </header>
              <ul className={styles.list}>
                <li>
                  <h3>Rochester Institute of Technology</h3>
                  <h4>Rochester, NY (2013 - 2017)</h4>
                  <h5>Bachelor's of Science</h5>
                  <p>New Media Interactive Development</p>
                  <p>Mobile App Development</p>
                </li>
              </ul>
            </li>
            {/* Skills */}
            <li className={styles.item}>
              <header className={styles.item_header}>
                <h2>Skills</h2>
              </header>
              <ul>
                <li>HTML5</li>
                <li>NodeJS</li>
                <li>Angular</li>
                <li>React</li>
                <li>Ionic</li>
                <li>Swift</li>
              </ul>
            </li>
            {/* Recent Projects */}
            <li className={styles.item}>
              <header className={styles.item_header}>
                <h2>Recent Projects</h2>
              </header>
              <ul className={styles.list}>
                <li className={styles.item}>
                  <h3>Trump Card</h3>
                  <h4>iOS App Development (Winter 2016)</h4>
                  <h5>Swift</h5>
                  <p>
                    Build in Swift, Trump Card is a take on the 2016
                    presidential election where players take the role
                    of then candidate Donald Trump. Set in a press conference,
                    the player must answer various questions and is given two choices,
                    which are based on statements he has said in the past. The player must choose
                    which answer will better affect his standing in the polls while not angering Trump
                    resulting in the most negative answer being forced.
                  </p>
                </li>
                <li className={styles.item}>
                  <h3>270</h3>
                  <h4>Hybrid App Development (Spring 2016)</h4>
                  <h5>AngularJS &middot; Ionic Framework</h5>
                  <p>
                    270 is an U.S. historical and government trivia game where players choose a
                    party and answer trivia to earn the 270 electoral votes needed to win the presidency.
                  </p>
                </li>
                <li className={styles.item}>
                  <h3>Thinking Cap</h3>
                  <h4>Web App Development (Fall - Winter 2016)</h4>
                  <h5>NodeJS &middot; MySQL</h5>
                  <p>
                    Thinking Cap is a web application that acts as a shell for various statistic games
                    currently in development. My duties in this project were mainly focused on creating
                    and developing the web application itself, client side scripts related to user
                    interactions and widgets, as well as creating, managing, and linking the database to
                    the web application so that data could be stored and accessed by the app. I also worked
                    on initializing user authentication, email integration, and validation.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </section>
        {/* CTA PDF version */}
        <CallToAction>
          <h3>Looking for a PDF of printable version of my resume?</h3>
           <a href='media/resume.pdf' target='_blank'><Button>Resume</Button></a>
        </CallToAction>
        {/* TODO: Contact Form */}
      </section>
    );
  }
}

export default About;
