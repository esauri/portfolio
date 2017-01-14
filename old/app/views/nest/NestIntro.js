import React from 'react';

// Create NestIntro class
export default class NestIntro extends React.Component {

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
          <h3>Nest</h3>

          <h5>Category</h5>
          <h3>Web Application</h3>

          <h5>Technologies Used</h5>
          <p>HTML5 &middot; CSS3 &middot; Javascript &middot; Google Maps &middot; PubNub</p>

          <a className='btn mobile-unfriendly' href='https://people.rit.edu/ejs3863/330/nest/' target='_blank'>Visit Nest</a>
        </aside>
        <section id='project-description'>
          <h5>What is Nest?</h5>
          <p>
            Making connections is important and life-changing.
             Nest makes connecting with others easy.
             Nest empowers users to create connections that otherwise
             wouldn't have happened. As a social web service a
             Nest will be found in your current location using <a href='https://developers.google.com/maps/' target='_blank'>Google Maps</a>.
             Your local flock, users inside your Nest, will be able to
             communicate with you using <a href='https://www.pubnub.com/developers/' target='_blank'>PubNub</a>.
           </p>
           <h5>How does it work?</h5>
           <p>
              Nest is a web application that works with three other web services
              namely Google Maps so that users can get a geolocation and "fly" there.
              Then the user enters that location's chatroom using PubNub.
              To fit within our anonymous Nest ecosystem the user gets a randomized
              bird species as a name, along with their own unique color, avatar, and
              background which is randomly chosen from <a href='https://unsplash.com/developers' target='_blank'>Unsplash</a>. From there the user
              can chat with others that have chosen the same location.
            </p>
        </section>
      </section>
    );
  }

  // Render function
  render() {
    // cache the markup
    const nestIntro = this.createMarkup();

    // Return markup
    return (
      nestIntro
    );
  }
}
