import React from 'react';
import styles from './styles.module.css';

export default ({ children, wrap, reverse }) => (
  <section className={`${(wrap) ? styles.row_wrap : styles.row} ${(reverse) ? styles.reverse : ''}`}>
    { children }
  </section>
);
