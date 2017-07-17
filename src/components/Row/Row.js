import React, { Component } from 'react';
import styles from './styles.module.css';

class Row extends Component {
  render() {
    const { wrap, reverse } = this.props;

    return (
      <section className={`${(wrap) ? styles.row_wrap : styles.row} ${(reverse) ? styles.reverse : ''}`}>
        { this.props.children }
      </section>
    );
  }
}

export default Row;
