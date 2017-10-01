import React from 'react';
import styles from './styles.module.css';

export default ({ children }) => (
  <section className={styles.cta}>
    { children }
  </section>
);
