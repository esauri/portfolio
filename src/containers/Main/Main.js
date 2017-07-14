import React, { Component } from 'react';
import styles from './styles.module.css';

import Navigation from './../Navigation/Navigation';

class Main extends Component {
  render() {
    return (
      <article className={styles.container}>
        <Navigation />
        { this.props.children }
      </article>
    );
  }
}

export default Main;
