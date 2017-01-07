import React from 'react';
import Article from '../../components/layout/Article';

// Import content
import ClickerGameBody from './ClickerGameBody';
import ClickerGameConclusion from './ClickerGameConclusion';
import ClickerGameIntro from './ClickerGameIntro';

// Create ClickerGame class
export default class ClickerGame extends React.Component {
  // Create constructor
  constructor() {
    super();
  }

  // Render function
  render() {
    // Return content
    return (
      <article className='container case-study'>
        <ClickerGameIntro />
        <ClickerGameBody />
      </article>
    );
  }
}
