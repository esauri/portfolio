import React from 'react';
//import { IndexLink, Link } from 'react-router';

// Should import navigation panel
import HeroTag from './header/HeroTag';
//import NavigationPanel from './header/NavigationPanel';

// Header class
export default class Header extends React.Component {
  constructor() {
    super();
  }

  /**
   * render - Renders the Header Element
   * @function render
   * @return {HTMLElement} returns Header element
   */
  render() {
    // Get the panelOpen state to pass as a prop
    //const panelOpen = this.state.panelOpen;
    const parentId = this.props.parentId;
    let heroClass = '';

    if (parentId !== 'home') {
      heroClass = ' hero';
    }
    return (
      <header className={'header' + heroClass}>
        {(()=>{
          if (parentId === 'home') {
            return(<HeroTag />);
          }
        })()}
      </header>
    );
  }
}
