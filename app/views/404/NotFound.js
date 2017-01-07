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
      <section>
        <h1>¯\_(ツ)_/¯</h1>
        <p>Page not found</p>
        <Link to='/'>Home</Link>
      </section>
    );
  }

  // Render function
  render() {

    // Cache the markup
    const markup = this.createMarkup();

    // Return markup
    return (
      <article className='container case-study' id='not-found'>
        {markup}
      </article>
    );
  }
}
