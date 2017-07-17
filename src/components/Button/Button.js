import React, { Component } from 'react';
import styles from './styles.module.css';

class Button extends Component {
  render() {
    const {  fab, show, round } = this.props;
    return (
      <button
        className={`${fab ? styles.fab : ''} ${show ? styles.show : ''} ${styles.btn} ${round ? styles.round : ''}`}
        onClick={this.props.onClick}
      >
        { this.props.children }
      </button>
    );
  }
}

export default Button;
