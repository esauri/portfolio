import React from 'react';
import Article from '../../components/layout/Article';

// Import content
import AudioVisualizerBody from './AudioVisualizerBody';
import AudioVisualizerConclusion from './AudioVisualizerConclusion';
import AudioVisualizerIntro from './AudioVisualizerIntro';

// Create AudioVisualizer class
export default class AudioVisualizer extends React.Component {
  // Create constructor
  constructor() {
    super();
  }

  // Render function
  render() {
    // Return content
    return (
      <article className='container case-study'>
        <AudioVisualizerIntro />
        <AudioVisualizerBody />
        <AudioVisualizerConclusion />
      </article>
    );
  }
}
