import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

import NavigationBar from './../../components/NavigationBar/NavigationBar';

class Main extends Component {
  render() {
    return (
      <article className={styles.container}>
        <NavigationBar>
          <Link className={styles.link} to='/'>Home</Link>
          <Link className={styles.link} to='/about'>About</Link>
        </NavigationBar>
        { this.props.children }
      </article>
    );
  }
}

export default Main;
