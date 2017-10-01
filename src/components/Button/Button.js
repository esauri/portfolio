import React from 'react';
import styles from './styles.module.css';

export default ({ children, fab, show, round, onClick }) => (
  <button
    className={`${fab ? styles.fab : ''} ${show ? styles.show : ''} ${styles.btn} ${round ? styles.round : ''}`}
    onClick={onClick}
  >
    { children }
  </button>
);
