import React, { Component } from 'react';
import styles from './styles.module.css';

class HamburgerIcon extends Component {
  render() {
    const { onClickEvent } = this.props;

    return (
      <button className={styles.btn} onClick={onClickEvent}>
        <span className={styles.line} />
        <span className={styles.line} />
        <span className={styles.line} />
      </button>
    );
  }
}

export default HamburgerIcon;
