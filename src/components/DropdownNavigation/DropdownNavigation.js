import React, { Component } from 'react';
import styles from './styles.module.css';

import PopupNavigation from './../PopupNavigation/PopupNavigation';

class DropdownNavigation extends Component {
  render() {
    const { show } = this.props;

    return (
      <section className={`${styles.nav_dropdown} ${(show) ? styles.nav_dropdown_show : ''}`}>
        <section className={styles.arrow}/>
        <PopupNavigation>
          {this.props.children}
        </PopupNavigation>
      </section>
    );
  }
}

export default DropdownNavigation;
