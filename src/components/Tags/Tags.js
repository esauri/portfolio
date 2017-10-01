import React from 'react';
import styles from './styles.module.css';

export default ({ children }) => (
  <ul className={styles.tags}>
    { children }
  </ul>
);
