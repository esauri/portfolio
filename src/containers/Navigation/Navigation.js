import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

import Header from './../../components/Header/Header';
import CloseIcon from './../../components/CloseIcon/CloseIcon';
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
      showDropdown: false,
    };

    this.handleResize = this.handleResize.bind(this);
    this.handleDropdownToggle = this.handleDropdownToggle.bind(this);
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

  handleDropdownToggle() {
    const { showDropdown } = this.state;

    this.setState({
      showDropdown: !showDropdown,
    });
  }

  renderNavigation() {
    const { projects, playground } = this.props;
    const { mobile, navOpen, showDropdown } = this.state;

    const desktopNav = (
      <GlobalNavigation>
        <Link className={styles.link} to=''>Home</Link>
        <Link className={styles.link} to='/about'>About</Link>
        <span className={`${styles.link} ${styles.dropdown_item}`} onMouseEnter={this.handleDropdownToggle} onMouseLeave={() => { setTimeout(this.handleDropdownToggle, 50); }}>
          Work
          <DropdownNavigation show={showDropdown}>
            {/* Main Projects */}
            <h3 className={styles.nav_section_title}>Projects</h3>
            <ul className={styles.nav_list}>
              {
                projects.map((project, index) => {
                  return (
                    <li className={styles.nav_item} key={index}>
                      <Link className={styles.project_container} to={project.link}>
                        <img className={styles.project_thumbnail} alt={project.thumbnail.desc} src={project.thumbnail.src} />
                        <section className={styles.project_label}>
                          <h3 className={styles.project_title}>{project.name}</h3>
                          <p className={styles.project_desc}>{project.desc}</p>
                        </section>
                      </Link>
                    </li>
                  );
                })
              }
            </ul>
            {/* Playground */}
            <h3 className={`${styles.nav_section_title} ${styles.nav_section_title_secondary}`}>Playground</h3>
            <ul className={`${styles.nav_list} ${styles.nav_list_secondary}`}>
              {
                playground.map((project, index) => {
                  return (
                    <li className={styles.nav_item} key={index}>
                      <Link className={styles.project_container} to={project.link}>
                        <img className={styles.project_thumbnail} alt={project.thumbnail.desc} src={project.thumbnail.src} />
                        <section className={styles.project_label}>
                          <h3 className={styles.project_title}>{project.name}</h3>
                        </section>
                      </Link>
                    </li>
                  );
                })
              }
            </ul>
          </DropdownNavigation>
        </span>
        <a className={styles.link} href='media/resume.pdf' target='_blank'>Resume</a>
      </GlobalNavigation>
    );

    const mobileNav = (
      <section className={`${styles.popup_container} ${(navOpen) ? styles.popup_container_show : ''}`}>
        <PopupNavigation>
          {/* Close button */}
          <CloseIcon onClickEvent={this.handleHamburgerBtnClick} />
            {/* Projects */}
            <h3 className={styles.nav_section_title}>Projects</h3>
            <ul className={styles.nav_list}>
              {
                projects.map((project, index) => {
                  return (
                    <li className={styles.nav_item} key={index}>
                      <Link className={styles.project_container} to={project.link}>
                        <img className={styles.project_thumbnail} alt={project.thumbnail.desc} src={project.thumbnail.src} />
                        <section className={styles.project_label}>
                          <h3 className={styles.project_title}>{project.name}</h3>
                        </section>
                      </Link>
                    </li>
                  );
                })
              }
              {
                playground.map((project, index) => {
                  return (
                    <li className={styles.nav_item} key={index}>
                      <Link className={styles.project_container} to={project.link}>
                        <img className={styles.project_thumbnail} alt={project.thumbnail.desc} src={project.thumbnail.src} />
                        <section className={styles.project_label}>
                          <h3 className={styles.project_title}>{project.name}</h3>
                        </section>
                      </Link>
                    </li>
                  );
                })
              }
            </ul>
            {/* Secondary Links */}
            <h3 className={`${styles.nav_section_title} ${styles.nav_section_title_secondary}`}>General</h3>
            <ul className={`${styles.nav_list} ${styles.nav_list_secondary}`}>
              <li className={styles.nav_item}>
                <Link to=''>Home</Link>
              </li>
              <li className={styles.nav_item}>
                <Link to='/about'>About</Link>
              </li>
              <li className={styles.nav_item}>
                <a href='media/resume.pdf' target='_blank'>Resume</a>
              </li>
            </ul>
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
