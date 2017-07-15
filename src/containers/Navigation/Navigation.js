import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

// Components
import Header from './../../components/Header/Header';
import CloseIcon from './../../components/CloseIcon/CloseIcon';
import HamburgerIcon from './../../components/HamburgerIcon/HamburgerIcon';
import PopupNavigation from './../../components/PopupNavigation/PopupNavigation';
import GlobalNavigation from './../../components/GlobalNavigation/GlobalNavigation';
import DropdownNavigation from './../../components/DropdownNavigation/DropdownNavigation';

// Actions
import { togglePopupMenu, toggleDropdownMenu } from './../../actions';

// Styles
import styles from './styles.module.css';

class Navigation extends Component {
  renderNavigation() {
    const {
      mobile,
      projects,
      playground,
      showDropdown,
      mobileNavOpen,
      handleDropdownToggle,
      handleHamburgerBtnClick,
    } = this.props;

    const desktopNav = (
      <GlobalNavigation>
        <Link className={styles.link} to=''>Home</Link>
        <Link className={styles.link} to='/about'>About</Link>
        <span
          className={`${styles.link} ${styles.dropdown_item}`}
          onMouseEnter={() => { handleDropdownToggle(true); }}
          onMouseLeave={() => { setTimeout(() => { handleDropdownToggle(false); }, 50); }}
        >
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
      <section className={`${styles.popup_container} ${(mobileNavOpen) ? styles.popup_container_show : ''}`}>
        <PopupNavigation>
          {/* Close button */}
          <CloseIcon onClickEvent={() => { handleHamburgerBtnClick(false); }} />
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
    const { mobile, handleHamburgerBtnClick } = this.props;

    // IF mobile show hamburger menu icon
    const hamburgerMenu = (mobile) ? <HamburgerIcon onClickEvent={() => { handleHamburgerBtnClick(true); }} /> : null;

    return (
      <Header>
        <h1><Link className={styles.link} to='/'>Erick Sauri</Link></h1>
        { hamburgerMenu }
        { this.renderNavigation() }
      </Header>
    );
  }
}

/**
 * mapStateToProps
 *
 * @param {Object} state
 */
const mapStateToProps = state => {
  return {
    mobile: state.global.mobile,
    projects: state.global.projects,
    playground: state.global.playground,
    showDropdown: state.global.showDropdown,
    mobileNavOpen: state.global.mobileNavOpen,
  };
}

/**
 * mapDispatchToProps
 *
 * @param {Function} dispatch
 */
const mapDispatchToProps = dispatch => {
  return {
    handleHamburgerBtnClick: open => {
      dispatch(togglePopupMenu(open));
    },
    handleDropdownToggle: show => {
      dispatch(toggleDropdownMenu(show));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
