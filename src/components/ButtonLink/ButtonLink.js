import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

class ButtonLink extends Component {
  render() {
    return (
      <Link className={styles.btn} to={this.props.to}>
        { this.props.children }
      </Link>
    );
  }
}

export default ButtonLink;
