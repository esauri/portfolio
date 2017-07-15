import React, { PureComponent } from 'react';
import styles from './styles.module.css';

class Footer extends PureComponent {
  render() {
    return (
      <footer className={`wrapper ${styles.footer}`}>
        { this.props.children }
      </footer>
    );
  }
}

export default Footer;
