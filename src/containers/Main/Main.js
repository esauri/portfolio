import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TiMail from 'react-icons/lib/ti/mail';
import TiArrowUp from 'react-icons/lib/ti/arrow-up';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import TiSocialLinkedIn from 'react-icons/lib/ti/social-linkedin';

// Components
import Navigation from './../Navigation/Navigation';
import Footer from './../../components/Footer/Footer';
import Button from './../../components/Button/Button';

// Actions
import {
  toggleMobile,
  togglePopupMenu,
  toggleDropdownMenu,
  toggleBackToTopButton,
} from './../../actions';

// Styles
import styles from './styles.module.css';

class Main extends Component {
  constructor(props) {
    super(props);

    // Bind functions
    this.backToTop = this.backToTop.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.easeInOutQuad = this.easeInOutQuad.bind(this);
    this.scrollButtonToggle = this.scrollButtonToggle.bind(this);
  }

  componentDidMount() {
    // Get layout
    this.handleResize();

    // Add event listeners
    window.addEventListener('resize', this.handleResize, { passive: true });
    window.addEventListener('scroll', this.scrollButtonToggle);
  }

  componentWillUnmount() {
    // Remove event listeners
    window.removeEventListener('resize', this.handleResize);
    window.removeEventListener('scroll', this.scrollButtonToggle);

  }

  componentDidUpdate(prevProps) {
    const { location, dispatchDropdownToggle, dispatchtTogglePopupMenu } = this.props;

    // If we changed route
    if (location.pathname !== prevProps.location.pathname) {
      // Scroll to top
      window.scrollTo(0, 0);

      // Close/hide menu
      dispatchDropdownToggle(false);
      dispatchtTogglePopupMenu(false);
    }
  }

  /**
   * backToTop - Scrolls to top
   *
   */
  backToTop() {
    // Scroll to top
    // window.scrollTo(0, 0);
    const to = 0;
    const duration = 500;
    const start = document.body.scrollTop;
    const change = to - start;
    let currentTime = 0;
    const increment = 20;

    /**
     * animateScroll
     *
     */
    const animateScroll = () => {
      // Increment current time
      currentTime += increment;

      // Get new top
      const newTop = Number(this.easeInOutQuad(currentTime, start, change, duration));

      // Scroll to new top
      window.scrollTo(0, newTop);

      // If current time is less than duration
      if (duration > currentTime) {
        // Set timeout to call this function
        setTimeout(animateScroll, increment);
      }
    };

    // Animate scroll to top
    animateScroll();
  }

  /**
   * easeInOutQuad
   *
   * @param {Number} time
   * @param {Number} start
   * @param {Number} change
   * @param {Number} duration
   */
  easeInOutQuad(time, start, change, duration) {
    // Divide time by half a duration
    time /= duration / 2;

    // If time is less than one return change
    if (time < 1) return change / 2 * time * time + start;

    // Subtract from time
    time--;

    // Return change
  	return - change / 2 * (time * (time - 2) - 1) + start;
  }

  /**
   * handleResize - Handles window resize
   *
   */
  handleResize() {
    const { dispatchMobileToggle } = this.props;

    // Maximum size for mobile
    const LAYOUT_THRESHOLD = 768;

    // We're in mobile if width is less than 600
    dispatchMobileToggle(LAYOUT_THRESHOLD > window.innerWidth);
  }

  scrollButtonToggle(event) {
    const SCROLL_TOP_MIN = 700;
    const { dispatchBackToTopToggle } = this.props;

    dispatchBackToTopToggle(document.body.scrollTop >= SCROLL_TOP_MIN);
  }

  render() {
    const iconSize = 30;
    const { backToTop } = this.props;

    return (
      <article className={styles.container}>
        <Navigation />
        { this.props.children }
        {/* Back to top */}
        <Button fab show={backToTop} onClick={this.backToTop}>
          <TiArrowUp size={iconSize} />
        </Button>
        {/* Footer */}
        <Footer>
          <ul className={styles.social_links}>
            <li className={styles.social_link}>
              <a href='mailto:ejs3863@rit.edu'>
                <TiMail size={iconSize} />
              </a>
            </li>
            <li className={styles.social_link}>
              <a href='https://www.linkedin.com/in/erick-sauri-1847357b' target='_blank' rel='noopener noreferrer'>
                <TiSocialLinkedIn size={iconSize} />
              </a>
            </li>
            <li className={styles.social_link}>
              <a href='https://github.com/esauri' target='_blank' rel='noopener noreferrer'>
                <TiSocialGithub size={iconSize} />
              </a>
            </li>
          </ul>
          <p>&copy; 2017 Erick Sauri</p>
        </Footer>
      </article>
    );
  }
}

const mapStateToProps = state => {
  return {
    backToTop: state.global.backToTop,
  };
}

/**
 * mapDispatchToProps
 *
 * @param {Function} dispatch
 */
const mapDispatchToProps = dispatch => {
  return {
    dispatchMobileToggle: mobile => {
      dispatch(toggleMobile(mobile));
    },
    dispatchtTogglePopupMenu: open => {
      dispatch(togglePopupMenu(open));
    },
    dispatchDropdownToggle: show => {
      dispatch(toggleDropdownMenu(show));
    },
    dispatchBackToTopToggle: visible => {
      dispatch(toggleBackToTopButton(visible));
    },
  };
}

// Export connected Component
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
