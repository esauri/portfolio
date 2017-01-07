import React from 'react';

// Create TwoSevenZeroIntro class
export default class TwoSevenZeroIntro extends React.Component {

  // Create constructor
  constructor() {
    super();
  }

  // Function which holds markup
  createMarkup() {
    return(
      <section id='project-intro'>
        <aside>
          <h5>Project</h5>
          <h3>270</h3>

          <h5>Category</h5>
          <h3>Mobile App Development</h3>

          <h5>Technologies Used</h5>
          <p>HTML5 &middot; Sass &middot; Javascript &middot; Angular &middot; Ionic Framework</p>

          <ul className='social-links'>
            <li>
              <a className='icon ion-social-github' href='https://github.com/esauri/270' target='_blank'></a>
            </li>
            <li>
              <a className='mobile-unfriendly icon ion-ipad' href='https://projects.invisionapp.com/share/9D6VEX5VU#/screens' target='_blank'></a>
            </li>
          </ul>
        </aside>

        <section id='project-description'>
          <h5>Description</h5>
          <p>
            270 is a trivia game where the player takes on the role of a Presidential Candidate
            of either the Democratic or Republican party and attempts to obtain the necessary
            delegates, 270, to enter the White House.
          </p>

          <h5>Goal</h5>
          <p>
            Clicker Game was an assignment where we had to create a web game
            using canvas. The goal of the game is to click on enemies before
            they get angry. Failing to do so will allow them to hurt Bob and
            when Bob's health reaches zero the game is over. Clicking on enemies
            can also heal Bob or grant it protective shields so it can deter coming
            attacks. For media the popping sound emitted when clicking an enemy was
            made by <a href='https://freesound.org/people/greenvwbeetle/sounds/244657/' target='_blank'>greenvwbeetle</a> and
            the shield sound is by <a href='https://freesound.org/people/thehorriblejoke/sounds/198969/' target='_blank'>thehorriblejoke</a>.
            The art is slightly edited by me but was created by <a href='http://www.kenney.nl' target='_blank'>Kenney Vleugels</a>.
          </p>
        </section>
      </section>
    );
  }

  // Render function
  render() {
    // cache the markup
    const twoSevenZeroIntro = this.createMarkup();

    // Return markup
    return (
      twoSevenZeroIntro
    );
  }
}
