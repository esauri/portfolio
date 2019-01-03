import React from 'react';
import styles from './styles.module.css';

export default ({ children, reverse, space, full, classes }) => (
  <section className={`${styles.column} ${styles[`column_${space}`]} ${(full) ? styles.full : '' } ${(reverse) ? styles.revered : ''} ${classes || ''}`}>
    { children }
  </section>
);