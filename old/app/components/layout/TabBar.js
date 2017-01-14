import React from 'react';
import { IndexLink, Link } from 'react-router';

// TabBar class
export default class TabBar extends React.Component {
  constructor() {
    super();
    this.state = {
      navPosition: ''
    };
  }

  /**
   * togglePanel - calls the togglePanel function in Header to open the panel
   * @function togglePanel
   */
  togglePanel() {
    // Call the toggleProjectPanel function in Header
    this.props.toggleProjectPanel();
  }

  /**
   * componentDidMount - when component is mounted add event listener
   * @function componentDidMount
   */
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  /**
   * componentWillUnmount - when component is unmounted remove event listener
   * @function componentWillUnmount
   */
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  /**
   * handleScroll - checks if user has scrolled below the header
   * and changes nav state accordingly
   * @function handleScroll
   * @param  {Object} event object
   */
  handleScroll(event) {
    // Cache navPosition state and scroll information
    let navPosition = '',
        scrollTop = event.srcElement.body.scrollTop,
        headerHeight = document.querySelector('.header').scrollHeight;

    // If user has scrolled past the header
    if (scrollTop >= headerHeight) {
      // Set position to fixed
      navPosition = 'sticky';
    }
    // Otherwise
    else {
      // Set position to null
      navPosition = '';
    }

    this.setState({navPosition});
  }

  /**
   * render - Renders the TabBar
   * @function render
   * @return {HTMLElement} returns Nav element
   */
  render() {
    const {location} = this.props;
    const {navPosition} = this.state;

    //  onClick={this.togglePanel.bind(this)}
    return (
      <nav id='tabs' className={navPosition}>
        <ul>
          <li>
            <IndexLink to='/'><img src='img/logo.png' alt='Erick Sauri Logo' id='logo'/></IndexLink>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <button id='nav-panel-open'>Projects</button>
          </li>
          <li>
            <a href='./media/resume.pdf' target='_blank'>Resume</a>
          </li>
          <li>
            <button className='scroll-to-top'>Top</button>
          </li>
        </ul>
      </nav>
    );
  }
}
