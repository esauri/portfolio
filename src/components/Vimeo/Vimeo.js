import React from 'react';
import styles from './styles.module.css';

export default ({ src, title }) => (
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
