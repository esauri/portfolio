import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { updateLocation } from './../../actions';

class ScrollToTop extends Component {

  componentDidUpdate(prevProps) {
    // Get current pathname
    const { pathname } = this.props.location;
    // If we changed pages
    if (pathname !== prevProps.location.pathname) {
      // Scroll to top
      window.scrollTo(0, 0);

      // TODO: close/hide menu
    }
  }

  render() {
    return this.props.children;
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateRoute: location => {
      dispatch(updateLocation(location));
    },
  };
};

export default withRouter(connect(null, mapDispatchToProps)(ScrollToTop));
