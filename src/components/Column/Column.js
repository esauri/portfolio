import React, { Component } from 'react';
import styles from './styles.module.css';

class Column extends Component {
  render() {
    const { reverse, space, full } = this.props;
    return (
      <section className={`${styles.column} ${styles[`column_${space}`]} ${(full) ? styles.full : '' } ${(reverse) ? styles.revered : ''}`}>
        { this.props.children }
      </section>
    );
  }
}

export default Column;
