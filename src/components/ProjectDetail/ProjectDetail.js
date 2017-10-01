import React from 'react';
import styles from './styles.module.css';

export default ({ children }) => (
  <h4 className={styles.project_detail}>
    { children }
  </h4>
);
