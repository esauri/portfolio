import React from 'react';

// Create ClickerGameIntro class
export default class ClickerGameIntro extends React.Component {

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
          <h3>Clicker Game</h3>

          <h5>Category</h5>
          <h3>Game Design &amp; Development</h3>

          <h5>Technologies Used</h5>
          <p>HTML5 &middot; Javascript</p>

          <ul className='social-links'>
            <li>
              <a className='icon ion-social-github' href='https://github.com/esauri/clickergame' target='_blank'></a>
            </li>
            <li>
              <a className='mobile-unfriendly icon ion-laptop' href='https://people.rit.edu/ejs3863/330/game/' target='_blank'></a>
            </li>
          </ul>
        </aside>
        <section id='project-description'>
          <h5>Description</h5>
          <p>
            Bob is stuck and it needs your help.
            Bob is surrounded by a strange alien species the is prone to
            quickly enrage and attack Bob! You must click on them before
            they enrage else Bob will be hurt. By clicking on enemies you can
            also give Bob time to heal and provide shields that protect him from
            attacks.
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
    const clickerGameIntro = this.createMarkup();

    // Return markup
    return (
      clickerGameIntro
    );
  }
}
