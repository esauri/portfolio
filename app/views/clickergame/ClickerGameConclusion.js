import React from 'react';

// Create ClickerGameConclusion class
export default class ClickerGameConclusion extends React.Component {

  // Create constructor
  constructor() {
    super();
  }

  // Function which holds markup
  createMarkup() {
    return(
      <section>
        <h5>Conclusion</h5>
        <p>
          I enjoyed making this project I found it
          interesting to work with canvas and javascript
          to make something easily playable on most browsers.
          Overall I would have liked to made the enemy sprites
          rounder like a circle inside of a rectangle so it would
          be easier to click on them. If I were to continue working
          on it I would add new levels so that you feel like you progress
          beyond the tutorial without just having the free for all level.
        </p>
      </section>
    );
  }

  // Render function
  render() {
    // cache the markup
    const clickerGameConclusion = this.createMarkup();

    // Return markup
    return (
      clickerGameConclusion
    );
  }
}
