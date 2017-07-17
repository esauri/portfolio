import React, { PureComponent } from 'react';
import styles from './styles.module.css';

class Tag extends PureComponent {
  render() {
    return(
      <li className={styles.tag}>
        { this.props.children }
      </li>
    );
  }
}

export default Tag;
