import React, { PureComponent } from 'react';
import styles from './styles.module.css';

class Tags extends PureComponent {
  render() {
    return (
      <ul className={styles.tags}>
        { this.props.children }
      </ul>
    );
  }
}

export default Tags;
