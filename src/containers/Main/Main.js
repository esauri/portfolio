import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

// Components
import Navigation from './../Navigation/Navigation';
import Footer from './../../components/Footer/Footer';

// Actions
import { toggleMobile, togglePopupMenu, toggleDropdownMenu } from './../../actions';

// Styles
import styles from './styles.module.css';

class Main extends Component {
  constructor(props) {
    super(props);

    // Bind resize
    this.handleResize = this.handleResize.bind(this);
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
   * handleResize - Handles window resize
   *
   */
  handleResize() {
    const { dispatchMobileToggle } = this.props;

    // Maximum size for mobile
    const LAYOUT_THRESHOLD = 600;

    // We're in mobile if width is less than 600
    dispatchMobileToggle(LAYOUT_THRESHOLD > window.innerWidth);
  }

  render() {
    return (
      <article className={styles.container}>
        <Navigation />
        { this.props.children }
        <Footer>
          <p>&copy; 2017 Erick Sauri</p>
        </Footer>
      </article>
    );
  }
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
  };
}

// Export connected Component
export default withRouter(connect(null, mapDispatchToProps)(Main));
