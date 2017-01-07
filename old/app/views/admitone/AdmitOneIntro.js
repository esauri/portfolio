import React from 'react';

// Create AdmitOneIntro class
export default class AdmitOneIntro extends React.Component {

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
          <h3>AdmitOne</h3>

          <h5>Category</h5>
          <h3>App Concept</h3>

          <h5>Technologies Used</h5>
          <p>Photoshop &middot; Illustrator</p>
        </aside>

        <section id='project-description'>
          <h5>Description</h5>
          <p>
            AdmitOne was an application that was designed
            as part of our team project for our design, user interface
            and interaction course. We were to make up an employer who
            would ask us to design an application. It was decided that
            the Argentine Government was to be the employer and the project
            would be a ticket purchasing app aimed at fostering a
            inclusiveness in the Argentine community especially among
            the younger generation, while also promoting cultural events.
          </p>
          <h5>Process</h5>
          <p>
            We began the design process by analyzing other similar
            applications and doing interviews with potential users on their
            experience and expectations of a ticket purchasing app. I and
            another teammate set up the interview questions and later I examined
            the Heuristics of the other similar applications. After which we each
            created several personas of users that might be interested in using
            our applications. Towards the end I focused more on the design of
            features while my teammates focused on scenarios and usability testing.
            After deciding on a mood for our application me and another teammate
            focused on designing the actual screens. I would design the main screen
            and the event screen while my teammate designed the profile and search
            screens, from wireframes and storyboards to eventual mockups. We kept
            iterating until our designs felt consistent and with the help of our
            third teammate tested their usability.
          </p>
        </section>
      </section>
    );
  }

  // Render function
  render() {
    // cache the markup
    const admitOneIntro = this.createMarkup();

    // Return markup
    return (
      admitOneIntro
    );
  }
}
