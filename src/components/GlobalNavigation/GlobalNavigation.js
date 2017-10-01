import React from 'react';
import styles from './styles.module.css';

export default ({ children }) => (
  <ul className={styles.global_nav}>
    {children.map((item, index) => {
      return (
        <li className={styles.global_nav_item} key={index}>
          {item}
        </li>
      );
    })}
  </ul>
);
