import React from 'react';

// Create TwoSevenZeroConclusion class
export default class TwoSevenZeroConclusion extends React.Component {

  // Create constructor
  constructor() {
    super();
  }

  // Function which holds markup
  createMarkup() {
    return(
      <section>
        <h2>Conclusion</h2>
      </section>
    );
  }

  // Render function
  render() {
    // cache the markup
    const twoSevenZeroConclusion = this.createMarkup();

    // Return markup
    return (
      twoSevenZeroConclusion
    );
  }
}
