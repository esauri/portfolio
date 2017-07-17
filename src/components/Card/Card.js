import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TiArrowRight from 'react-icons/lib/ti/arrow-right';

// Styles
import styles from './styles.module.css';

class Card extends Component {
  render() {
    const { project } = this.props;
    return (
      <Link to={project.link} className={`${styles.card} ${(project.style.invert) ? styles.invert : ''}`}>
        <section
          className={styles.thumbnail}
          style={{ background: `url(${project.thumbnail.src}) no-repeat center center`, backgroundSize: 'cover' }}
        >
        </section>
        <section className={styles.label}>
          <h2 className={styles.title}>
            {project.name}
            <TiArrowRight className={styles.icon} />
          </h2>
          <p className={styles.blurb}>
            {project.desc}
          </p>
        </section>
      </Link>
    );
  }
}

export default Card;
