import React from 'react';
import styles from './styles.module.css';

export default ({ children, className }) => (
  <ul className={className ? `${styles.tags} ${className}` : styles.tags}>
    { children }
  </ul>
);
