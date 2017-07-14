import React, { Component } from 'react';
import styles from './styles.module.css';

class GlobalNavigation extends Component {
  render() {
    return (
      <ul className={styles.global_nav}>
        {this.props.children.map((prop, index) => {
          return (
            <li className={styles.global_nav_item} key={index}>
              {prop}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default GlobalNavigation;
