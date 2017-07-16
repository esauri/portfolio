import React, { Component } from 'react';
import styles from './styles.module.css';

class CallToAction extends Component {
  render() {
    return(
      <section className={styles.cta}>
        { this.props.children }
      </section>
    );
  }
}

export default CallToAction;
