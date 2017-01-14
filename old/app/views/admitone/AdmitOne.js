import React from 'react';
import Article from '../../components/layout/Article';

// Import content
import AdmitOneBody from './AdmitOneBody';
import AdmitOneConclusion from './AdmitOneConclusion';
import AdmitOneIntro from './AdmitOneIntro';

// Create AdmitOne class
export default class AdmitOne extends React.Component {
  // Create constructor
  constructor() {
    super();
  }

  // Render function
  render() {
    // Return content
    return (
      <article className='container case-study'>
        <AdmitOneIntro />
        <AdmitOneBody />
        <AdmitOneConclusion />
      </article>
    );
  }
}
