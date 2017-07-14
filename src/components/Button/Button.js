import React, { Component } from 'react';
import styles from './styles.module.css';

class Button extends Component {
  render() {
    return (
      <button className={styles.btn}>
        { this.props.children }
      </button>
    );
  }
}

export default Button;
