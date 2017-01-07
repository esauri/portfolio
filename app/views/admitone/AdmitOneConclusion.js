import React from 'react';

// Create AdmitOneConclusion class
export default class AdmitOneConclusion extends React.Component {

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
          This project was an interesting one to work on as
          it was approached in a rather organized and logical manner.
          Working in a group also allowed more discussion and allowed
          us to see flaws in the design earlier and gave the team a
          sense of collective responisbility towards the project.
          During my own research over the project I came across
          Google's Material Design which influenced my design quite a bit.
          I would have liked to have come across Material design earlier
          so that I could experiment with it more as I could only do so
          much on a tighter schedule with other projects to work on.
        </p>
      </section>
    );
  }

  // Render function
  render() {
    // cache the markup
    const admitOneConclusion = this.createMarkup();

    // Return markup
    return (
      admitOneConclusion
    );
  }
}
