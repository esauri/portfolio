import React from 'react';
import { Link } from 'react-router';

// Create AudioVisualizerConclusion class
export default class AudioVisualizerConclusion extends React.Component {

  // Create constructor
  constructor() {
    super();
  }

  // Function which holds markup
  createMarkup() {
    return(
      <section>
        <h5>Thoughts</h5>
        <p>
          Working with canvas and audio was a great
          exercise as it helped me improve and learn
          more using Javascript. I was able to see its
          strength when combined with HTML and CSS to
          make awesome web applications. The audio visualizer
          was also a big stepping stone as it aided me when
          creating <Link to='/clickergame'>Clicker Game</Link>.
        </p>
      </section>
    );
  }

  // Render function
  render() {
    // cache the markup
    const audioVisualizerConclusion = this.createMarkup();

    // Return markup
    return (
      audioVisualizerConclusion
    );
  }
}
