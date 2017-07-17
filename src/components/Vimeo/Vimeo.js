import React, { Component } from 'react';
import styles from './styles.module.css';

class Vimeo extends Component {
  render() {
    const { src, title } = this.props;

    return(
      <section className={styles.video}>
        <iframe
          className={styles.vimeo}
          title={title}
          src={src}
          width='420'
          height='236'
          frameBorder='0'
          allowFullScreen
        />
      </section>
    );
  }
}

export default Vimeo;
