import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import styles from './styles.module.css';

class Header extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;

    this.pattern = /(about)|(clickergame)/;
    this.state = {
      reverse: this.pattern.test(location.pathname),
    };
  }

  componentDidMount() {
    const { history } = this.props;

    // Listen to any route changes
    history.listen((location, action) => {
      // Pass in new location
      this.onRouteChanged(location);
    });
  }

  onRouteChanged(location) {
    // If matches pattern set reverse to true
    this.setState({
      reverse: this.pattern.test(location.pathname),
    })
  }

  render() {
    const { sticky } = this.props;
    const { reverse } = this.state;

    return (
      <header
        className={`${styles.header} ${(reverse) ? styles.reverse : ''} ${(sticky) ? styles.sticky : ''}`}
      >
        <nav className={styles.nav_bar}>
          {this.props.children}
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
