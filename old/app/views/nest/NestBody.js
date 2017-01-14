import React from 'react';

// Create NestBody class
export default class NestBody extends React.Component {

  // Create constructor
  constructor() {
    super();
  }

  // Function which holds markup
  createMarkup() {
    return(
      <section>
        <h5>Gallery</h5>
        <ul className='row row-2'>
          <li className='row-item'><img src='./img/nest/nestmap.PNG' alt='Nest Map Screen' title='Nest Map' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/nest/nestchat.png' alt='Nest Chat Screen' title='Nest Chat' className='gallery-image'/></li>

        </ul>
      </section>
    );
  }

  // Render function
  render() {
    // cache the markup
    const nestBody = this.createMarkup();

    // Return markup
    return (
      nestBody
    );
  }
}
