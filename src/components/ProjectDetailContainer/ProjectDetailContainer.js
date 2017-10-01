import React from 'react';
import styles from './styles.module.css';

export default ({ children }) => (
  <aside className={styles.project_details}>
    { children }
  </aside>
);
