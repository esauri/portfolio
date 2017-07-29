import React, { Component } from 'react';
import styles from './styles.module.css';

class Banner extends Component {
  render() {
    const { src, invert, isMobile } = this.props;

    return (
      <section
        className={`${styles.banner} ${(invert) ? styles.invert : ''}`}
        style={{ background: `url(${src}) center / cover ${(isMobile) ? '' : 'fixed'} no-repeat` }}
      >
        { this.props.children }
        <span className={styles.chevron_down} />
      </section>
    );
  }
}

export default Banner;
