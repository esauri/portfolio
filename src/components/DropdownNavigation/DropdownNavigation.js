import React from 'react';
import styles from './styles.module.css';

import PopupNavigation from './../PopupNavigation/PopupNavigation';

export default ({ children, show }) => (
  <section className={`${styles.nav_dropdown} ${(show) ? styles.nav_dropdown_show : ''}`}>
    <section className={styles.arrow}/>
    <PopupNavigation>
      { children }
    </PopupNavigation>
  </section>
);
