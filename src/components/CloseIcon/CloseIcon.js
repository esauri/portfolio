import React, { Component } from 'react';
import styles from './styles.module.css';

class CloseIcon extends Component {
  render() {
    const { onClickEvent } = this.props;

    return(
      <button className={styles.btn} onClick={onClickEvent}>
        <span className={styles.close}></span>
        {/* <span className={styles.line}></span> */}
      </button>
    );
  }
}

export default CloseIcon;
