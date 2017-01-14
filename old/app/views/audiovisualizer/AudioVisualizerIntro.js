import React from 'react';

// Create AudioVisualizerIntro class
export default class AudioVisualizerIntro extends React.Component {

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
          <h3>Audio Visualizer</h3>

          <h5>Category</h5>
          <h3>Web Application</h3>

          <h5>Technologies Used</h5>
          <p>HTML5 &amp; CSS3 &amp; Javascript &amp; Audio API</p>

          <ul className='social-links'>
            <li>
              <a className='icon ion-social-github' href='https://github.com/esauri/audiovisualizer' target='_blank'></a>
            </li>
            <li>
              <a className='mobile-unfriendly icon ion-laptop' href='https://people.rit.edu/ejs3863/330/audiovisualizer/' target='_blank'></a>
            </li>
          </ul>
          <a className='btn btn-special mobile-unfriendly' href='https://people.rit.edu/ejs3863/330/audiovisualizer/' target='_blank'>Visit Audio Visualizer</a>
        </aside>
        <section id='project-description'>
          <h5>Description</h5>
          <p>
            The audio visualizer is a fun interactive
            application where audio nodes are translated
            into geometric forms by drawing them on a canvas.
            The audio visualizer is interactive as it also allows
            users to sketch things on the canvas and save them.
            The brush tool is directly influenced by the audio nodes.
            The user can also change the amplitude of the audio nodes,
            they can switch between audio being processed as a frequency
            or a wave length, they can delay the audio and change the color
            of the drawings. The audio visualizer comes with four songs
            <em>Toca Madera</em> by <a href='http://loswalters.com/' target='_blank'>Los Wálters</a>, <em>Soñar es mi juego</em> by <a href='http://tototomas.com/' target='_blank'>Tototomás</a>, <em>'Cause I'm a man</em> by <a href='http://www.tameimpala.com/' target='_blank'>Tame Impala</a>, and <em>Lux Aeterna</em> by <a href='https://www.youtube.com/watch?v=W2JTwoO0geM' target='_blank'>Clint Mastell</a>.
         </p>
        </section>
      </section>
    );
  }

  // Render function
  render() {
    // cache the markup
    const audioVisualizerIntro = this.createMarkup();

    // Return markup
    return (
      audioVisualizerIntro
    );
  }
}
