import React, { Component } from 'react';
import styles from './styles.module.css';

class Banner extends Component {
  render() {
    const { src, invert } = this.props;

    return (
      <section
        className={`${styles.banner} ${(invert) ? styles.invert : ''}`}
        style={{ background: `url(${src}) no-repeat fixed center center`, backgroundSize: 'cover' }}
      >
        { this.props.children }
        <span className={styles.chevron_down} />
      </section>
    );
  }
}

export default Banner;
