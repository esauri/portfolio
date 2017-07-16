import React, { Component } from 'react';
import styles from './styles.module.css';

class Column extends Component {
  render() {
    const { reverse, space } = this.props;
    return (
      <section className={`${styles.column} ${styles[`column_${space}`]} ${(reverse) ? styles.revered : ''}`}>
        { this.props.children }
      </section>
    );
  }
}

export default Column;
