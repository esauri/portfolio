import React from 'react';
import styles from './styles.module.css';

export default ({ children, src, invert, isMobile }) => (
  <section
    className={`${styles.banner} ${(invert) ? styles.invert : ''}`}
    style={{ background: `url(${src}) center / cover ${(isMobile) ? '' : 'fixed'} no-repeat` }}
  >
    { children }
    <span className={styles.chevron_down} />
  </section>
);
