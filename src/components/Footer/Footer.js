import React from 'react';
import styles from './styles.module.css';

export default ({ children }) => (
  <footer className={`wrapper ${styles.footer}`}>
    { children }
  </footer>
);
