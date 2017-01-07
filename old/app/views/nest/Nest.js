import React from 'react';
import Article from '../../components/layout/Article';

// Import content
import NestBody from './NestBody';
import NestConclusion from './NestConclusion';
import NestIntro from './NestIntro';

// Create Nest class
export default class Nest extends React.Component {
  // Create constructor
  constructor() {
    super();
  }

  // Render function
  render() {
    // Return content
    return (
      <article className='container case-study'>
        <NestIntro />
        <NestBody />
        <NestConclusion />
      </article>
    );
  }
}
