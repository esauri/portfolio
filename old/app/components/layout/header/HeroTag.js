import React from 'react';
//import { IndexLink, Link } from 'react-router';

// HeroTag class
export default class HeroTag extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  /**
   * render - Renders the HeroTag
   * @function render
   * @return {HTMLElement} returns Section element
   */
  render() {

/*    //
    const Blurbs = {
      home: {
              title: 'Erick Sauri',
              description: 'Creative Developer',
              img: {
                src: 'img/bandera-negra.jpg',
                alt: 'Erick Sauri avatar',
                title: 'Erick Sauri',
                id: 'avatar'
              }
      },
      TwoSevenZero: {
              title: '270',
              description: 'Race to the White House'
      },
      TwoSevenZero: {
              title: '270',
              description: 'Race to the White House'
      },
      TwoSevenZero: {
              title: '270',
              description: 'Race to the White House'
      },
      <img src='img/bandera-negra.jpg' alt='Erick Sauri' id='avatar'/>

    }*/

    return (
      <section id='hero-tag'>
        <h1>Erick Sauri</h1>
        <p>Creative Developer</p>
      </section>
    );
  }
}
