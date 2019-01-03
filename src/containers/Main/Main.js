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
      showBackToTop: false,
    };

    // Bind functions
    this.backToTop = this.backToTop.bind(this);
    this.easeInOutQuad = this.easeInOutQuad.bind(this);
    this.scrollButtonToggle = this.scrollButtonToggle.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollButtonToggle, { passive: true });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.scrollButtonToggle);
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
    const { showBackToTop } = this.state;

    return (
      <article className={`${styles.container} ${styles.dark_theme}`}>
        <Header />
        <main className={styles.main}>
          { this.props.children }
        </main>
        {/* Back to top */}
        <Button fab show={showBackToTop} onClick={this.backToTop}>
          <TiArrowUp size={30} />
        </Button>
        {/* Footer */}
        <Footer />
      </article>
    );
  }
}

export default Main;
