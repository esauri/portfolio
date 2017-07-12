import React, { Component } from 'react';
import styles from './styles.module.css';

class NavigationBar extends Component {
  render() {
    return (
      <header className={styles.navBar}>
        {this.props.children}
      </header>
    );
  }
}

export default NavigationBar;
