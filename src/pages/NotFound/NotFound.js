import React, { Component } from 'react';

// Components
import ButtonLink from './../../components/ButtonLink/ButtonLink';
import MidnightCruise from './../../containers/MidnightCruise/MidnightCruise';

// Styles
import styles from './styles.module.css';

class NotFound extends Component {
  render() {
    return (
      <article className={styles.container}>
        <MidnightCruise>
          <section className={`wrapper`}>
            <h3>Space is a cold, lonely place.</h3>
            <p>Whatever you were looking for it ain't here...</p>
            <ButtonLink to={'/'}>Warp Home</ButtonLink>
          </section>
        </MidnightCruise>
      </article>
    );
  }
}

export default NotFound;
