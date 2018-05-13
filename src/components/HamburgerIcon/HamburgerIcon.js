import React from 'react';
import styles from './styles.module.css';

export default ({ onClickEvent }) => (
  <button name={'menu-btn'} className={styles.btn} onClick={onClickEvent}>
    <span className={styles.line} />
    <span className={styles.line} />
    <span className={styles.line} />
  </button>
);
