import React from 'react';
import styles from './styles.module.css';

export default ({ children }) => (
  <li className={styles.tag}>
    { children }
  </li>
);
