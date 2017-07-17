import React, { Component } from 'react';
import styles from './styles.module.css';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <nav className={styles.nav_bar}>
          {this.props.children}
        </nav>
      </header>
    );
  }
}

export default Header;
