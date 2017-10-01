import React from 'react';
import styles from './styles.module.css';

export default ({ onClickEvent }) => (
  <button className={styles.btn} onClick={onClickEvent}>
    <span className={styles.close}></span>
    {/* <span className={styles.line}></span> */}
  </button>
);
