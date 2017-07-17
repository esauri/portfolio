import React, { Component } from 'react';
import styles from './styles.module.css';

class PopupNavigation extends Component {
  render() {
    return (
    <nav className={styles.container}>
      {this.props.children}
    </nav>
    );
  }
}

export default PopupNavigation;
