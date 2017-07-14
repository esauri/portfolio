import React, { Component } from 'react';
import styles from './styles.module.css';

import PopupNavigation from './../PopupNavigation/PopupNavigation';

class DropdownNavigation extends Component {
  render() {
    return (
      <section className={styles.nav_dropdown}>
        <section className={styles.arrow}/>
        <PopupNavigation>
          {this.props.children}
        </PopupNavigation>
      </section>
    );
  }
}

export default DropdownNavigation;
