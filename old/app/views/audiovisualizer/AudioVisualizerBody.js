import React from 'react';

// Create AudioVisualizerBody class
export default class AudioVisualizerBody extends React.Component {

  // Create constructor
  constructor() {
    super();
  }

  // Function which holds markup
  createMarkup() {
    return(
      <section>
        <h5>Video</h5>
        <div className='video-responsive'>
          <iframe src='https://player.vimeo.com/video/183408638' width='420' height='236' frameBorder='0' allowFullScreen></iframe>
        </div>
      </section>
    );
  }

  // Render function
  render() {
    // cache the markup
    const audioVisualizerBody = this.createMarkup();

    // Return markup
    return (
      audioVisualizerBody
    );
  }
}
