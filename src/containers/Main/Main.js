import React, { Component } from 'react';
import TiArrowUp from 'react-icons/lib/ti/arrow-up';

// Components
import Header from './../Header/Header';
import Footer from './../Footer/Footer';
import Button from './../../components/Button/Button';

// Styles
import styles from './styles.module.css';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      darkMode: false,
      showBackToTop: false,
    };

    // Bind functions
    this.backToTop = this.backToTop.bind(this);
    this.toggleTheme = this.toggleTheme.bind(this);
    this.easeInOutQuad = this.easeInOutQuad.bind(this);
    this.scrollButtonToggle = this.scrollButtonToggle.bind(this);
    this.setThemeBasedOnTime = this.setThemeBasedOnTime.bind(this);
  }

  componentDidMount() {
    // Get theme based on time
    this.setThemeBasedOnTime();

    // Add event listeners
    // window.addEventListener('scroll', this.scrollButtonToggle);
  }

  componentWillUnmount() {
    // Remove event listeners
    // window.removeEventListener('scroll', this.scrollButtonToggle);
  }

  /**
   * setThemeBasedOnTime
   *
   */
  setThemeBasedOnTime() {
    const currentHour = new Date().getHours();

    // Light mode if between 6 and 6, othernise dark mode
    this.setState({ darkMode: !(6 > currentHour > 18) });
  }

  /**
   * toggleTheme - Toggles theme
   *
   */
  toggleTheme() {
    const { darkMode } = this.state;

    this.setState({ darkMode: !darkMode });
  }

  /**
   * backToTop - Scrolls to top
   *
   */
  backToTop() {
    // Scroll to top
    const to = 0;
    const duration = 500;
    const start = window.scrollY;
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

  scrollButtonToggle(event) {
    const SCROLL_TOP_MIN = 600;
    const { showBackToTop } = this.state;

    // If displayed and scroll is less
    if (showBackToTop && (SCROLL_TOP_MIN > window.scrollY)) {
      // Hide
      this.setState({ showBackToTop: !showBackToTop });
    } else if ((window.scrollY >= SCROLL_TOP_MIN) && !showBackToTop) {
      this.setState({ showBackToTop: !showBackToTop });
    }
  }

  render() {
    const { darkMode, showBackToTop } = this.state;

    return (
      <article className={`${styles.container} ${(darkMode) ? styles.dark_theme : styles.light_theme}`}>
        <Header darkMode={darkMode} />
        <main className={styles.main}>
          { this.props.children }
        </main>
        {/* Back to top */}
        <Button fab show={showBackToTop} onClick={this.backToTop}>
          <TiArrowUp size={24} />
        </Button>
        {/* Footer */}
        <Footer backToTop={this.backToTop} toggleTheme={this.toggleTheme} />
      </article>
    );
  }
}

export default Main;
