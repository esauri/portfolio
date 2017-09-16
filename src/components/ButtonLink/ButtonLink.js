import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export default ({ to, children }) => (
  <Link className={styles.btn} to={to}>
    { children }
  </Link>
);
