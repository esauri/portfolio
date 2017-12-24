import React from 'react';
import styles from './styles.module.css';

export default ({ children, sticky }) => (
  <header className={`wrapper ${styles.header} ${sticky ? 'sticky' : ''}`}>
    { children }
  </header>
);
