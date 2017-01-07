import React from 'react';
import Article from '../../components/layout/Article';

// Import content
import TwoSevenZeroBody from './TwoSevenZeroBody';
import TwoSevenZeroConclusion from './TwoSevenZeroConclusion';
import TwoSevenZeroIntro from './TwoSevenZeroIntro';

// Create TwoSevenZero class
export default class TwoSevenZero extends React.Component {
  // Create constructor
  constructor() {
    super();
  }

  // Render function
  render() {
    // Return content
    return (
      <article className='container case-study'>
        <TwoSevenZeroIntro />
        <TwoSevenZeroBody />
      </article>
    );
  }
}
