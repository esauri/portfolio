import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

import Header from './../../components/Header/Header';
import HamburgerIcon from './../../components/HamburgerIcon/HamburgerIcon';
import PopupNavigation from './../../components/PopupNavigation/PopupNavigation';
import GlobalNavigation from './../../components/GlobalNavigation/GlobalNavigation';
import DropdownNavigation from './../../components/DropdownNavigation/DropdownNavigation';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      mobile: true,
      navOpen: false,
    };

    this.handleResize = this.handleResize.bind(this);
    this.handleHamburgerBtnClick = this.handleHamburgerBtnClick.bind(this);
  }

  componentDidMount() {
    // Get layout
    this.handleResize();

    // Add event listener
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    // Remove event listener
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    // Maximum size for mobile
    const LAYOUT_THRESHOLD = 600;

    // Set state
    this.setState({
      // We're in mobile if width is less than 600
      mobile: (LAYOUT_THRESHOLD > window.innerWidth)
    });
  }

  handleHamburgerBtnClick() {
    const { navOpen } = this.state;

    this.setState({
      navOpen: !navOpen,
    });
  }

  renderNavigation() {
    const { mobile, navOpen } = this.state;
    const desktopNav = (
      <GlobalNavigation>
        <Link className={styles.link} to='/'>Home</Link>
        <Link className={styles.link} to='/about'>About</Link>
        <span className={`${styles.link} ${styles.dropdown_item}`}>
          Work
          <DropdownNavigation>
            <Link className={styles.link} to='/' >Link 1</Link>
            <Link className={styles.link} to='/'>Link 2</Link>
            <Link className={styles.link} to='/'>Link 3</Link>
          </DropdownNavigation>
        </span>
        <Link className={styles.link} to='/about'>Resume</Link>
      </GlobalNavigation>
    );

    const mobileNav = (
      <section className={`${styles.popup_container} ${(navOpen) ? styles.popup_container_show : ''}`}>
        <PopupNavigation>
          <button onClick={this.handleHamburgerBtnClick}>X</button>
          <Link className={styles.link} to='/about'>About</Link>
          <Link className={styles.link} to='/about'>Resume</Link>
          <Link className={styles.link} to='/' >Link 1</Link>
          <Link className={styles.link} to='/'>Link 2</Link>
          <Link className={styles.link} to='/'>Link 3</Link>
        </PopupNavigation>
      </section>
    );

    return (mobile) ? mobileNav : desktopNav;
  }

  render() {
    const { mobile } = this.state;

    // IF mobile show hamburger menu icon
    const hamburgerMenu = (mobile) ? <HamburgerIcon onClickEvent={this.handleHamburgerBtnClick} /> : null;

    return (
      <Header>
        <h1><Link className={styles.link} to='/'>Erick Sauri</Link></h1>
        { hamburgerMenu }
        { this.renderNavigation() }
      </Header>
    );
  }
}

export default Navigation;
