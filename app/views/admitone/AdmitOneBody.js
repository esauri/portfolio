import React from 'react';

// Create AdmitOneBody class
export default class AdmitOneBody extends React.Component {

  // Create constructor
  constructor() {
    super();
  }

  // Function which holds markup
  createMarkup() {
    return(
      <section>
        <h5>Gallery</h5>
        <h6>Moodboard</h6>
        <p>
          Our grand theme for the application was to establish a
          multicultural community adn emphasized ways in which our
          product would be harmonious, inviting, dynamic, vivacious,
          and accessible. Below are moodboards I made with a teammate.
        </p>
        <ul className='row row-3'>
          <li className='row-item'><img src='./img/admitone/moodboard.jpg' alt='AdmitOne Moodboard' title='Moodboard' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/admitone/joemoodboard.jpg' alt='AdmitOne Moodboard 2' title='Moodboard' className='gallery-image'/></li>

        </ul>

        <h6>Wireframes</h6>
        <p>
          We began to dive deep in the design of our product during
          this phase. Another team member and I split the sketches,
          wireframes, and storyboards of two screens so we could
          focus on them while the third team member did the usability
          testing. I worked with the main screen and event screen of
          the product.
        </p>
        <ul className='row row-2'>
          <li className='row-item'><img src='./img/admitone/MainscreenWF.jpg' alt='AdmitOne Home Screen Wireframe' title='Home Screen Wireframe' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/admitone/eventscreenwireframe.jpg' alt='AdmitOne Event Screen Wireframe' title='Event Screen Wireframe' className='gallery-image'/></li>
        </ul>
        <h6>Screens</h6>
        <p>
          After collaborating on each others designs we created
          several mockups for our assigned screens and worked to
          keep them consistent and made sure each of the screens
          had a unique purpose. We also continued the usability
          testing on each screen. Below are the views I worked on.
        </p>
        <ul className='row row-2'>
          <li className='row-item'><img src='./img/admitone/splashscreen.jpg' alt='AdmitOne Splash Screen' title='Splash Screen' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/admitone/admitonehome.jpg' alt='AdmitOne Home Screen' title='Home Screen' className='gallery-image'/></li>
        </ul>
        <ul className='row row-2'>
          <li className='row-item'><img src='./img/admitone/admitoneeventtop.jpg' alt='AdmitOne Event Screen Top Half' title='Event Screen' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/admitone/admitoneeventbottom.jpg' alt='AdmitOne Event Screen Bottom Half' title='Event Screen' className='gallery-image'/></li>
        </ul>
      </section>
    );
  }

  // Render function
  render() {
    // cache the markup
    const admitOneBody = this.createMarkup();

    // Return markup
    return (
      admitOneBody
    );
  }
}
