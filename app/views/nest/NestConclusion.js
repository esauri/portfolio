import React from 'react';

// Create NestConclusion class
export default class NestConclusion extends React.Component {

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
          Nest was an interesting experience since I had to work with
          two different APIs and use them to create my own web application.
          This project gave me insight on how to work with other tools and
          incorporate their data to work with my own in order to provide
          a cohesive service. Some alterations I would add to Nest would
          be jumping straight into a nest based on the user's actual location
          but still keeping the search location so that users could still
          interact in other nests. Switching between nests could be more
          efficient and giving the user a list of previously visited nests
          could help with that, as well as allowing users to view messages
          sent before joining a nest and allowing private nests between
          users.
        </p>
      </section>
    );
  }

  // Render function
  render() {
    // cache the markup
    const nestConclusion = this.createMarkup();

    // Return markup
    return (
      nestConclusion
    );
  }
}
