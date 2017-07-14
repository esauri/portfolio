import React, { Component } from 'react';
import styles from './styles.module.css';

class HamburgerIcon extends Component {
  render() {
    const { onClickEvent } = this.props;

    return (
      <button className={styles.btn} onClick={onClickEvent}>
        <span className={styles.hamburger_line} />
        <span className={styles.hamburger_line} />
        <span className={styles.hamburger_line} />
      </button>
    );
  }
}

export default HamburgerIcon;
