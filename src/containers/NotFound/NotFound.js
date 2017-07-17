import React, { Component } from 'react';

// Components
import ButtonLink from './../../components/ButtonLink/ButtonLink';

// Styles
import styles from './styles.module.css';

class NotFound extends Component {
  render() {
    return (
      <article className={styles.container}>
          <section className={`wrapper ${styles.center}`}>
            <h2>Page not found</h2>
            <ButtonLink to={'/'}>¯\_(ツ)_/¯</ButtonLink>
          </section>
      </article>
    );
  }
}

export default NotFound;
