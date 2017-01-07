import React from 'react';
import { Link } from 'react-router';

// Create NotFound class
export default class NotFound extends React.Component {
  // Create constructor
  constructor() {
    super();
  }

  // Function that holds markup
  createMarkup() {
    return (
      <section id='project-intro'>
        <aside>
          <img id='avatar' src='./img/me.png' alt='Picture of Erick Sauri' title='Me'/>
        </aside>
        <section id='project-description'>
          <h5>About me</h5>
          <p>
            Hey! I’m Erick Sauri a senior at Rochester Institute of Technology.
            Currently I’m majoring in New Media Interactive Development
            and finishing a minor in Mobile App Development. I’m looking to
            pursue a career in web and mobile app development.
            Feel free to email me at ejs3863 at rit.edu.
          </p>
        </section>
      </section>
    );
  }

  // Render function
  render() {

    // Cache the markup
    const markup = this.createMarkup();

    // Return markup
    return (
      <article className='container case-study about'>
        {markup}
      </article>
    );
  }
}
