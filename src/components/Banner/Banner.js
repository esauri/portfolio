import React from 'react';
import styles from './styles.module.css';

export default ({ children, src, invert }) => (
  <section className={`${styles.banner} ${(invert) ? styles.invert : ''}`}
    style={{ backgroundImage: `url(${src})` }}
  >
    { children }
    <span className={styles.chevron_down} />
  </section>
);
