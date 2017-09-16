import React from 'react';
import { connect } from 'react-redux';

// Components
import Row from './../../components/Row/Row';
import Card from './../../components/Card/Card';
import Column from './../../components/Column/Column';
import MidnightCruise from './../../containers/MidnightCruise/MidnightCruise';

// Styles
import styles from './styles.module.css';

const Home = ({ projects }) => (
  <article>
    <MidnightCruise>
      <section className={'wrapper'}>
        <h2 className={styles.heading}>Hi there, I'm Erick Sauri!</h2>
        <p className={styles.intro}>
          I'm a creative developer who focuses on front-end interactive experiences, web &amp; mobile apps, and games.
        </p>
      </section>
    </MidnightCruise>
    {/* Projects */}
    <section className={'wrapper'}>
      <Row wrap>
        {
          projects.map((project, index) => {
            return (
              <Column key={index} space={project.style.gutter} full>
                <Card
                  project={project}
                />
              </Column>
            );
          })
        }
      </Row>
    </section>
  </article>
);

/**
 * mapStateToProps
 *
 * @param {Object} state
 */
const mapStateToProps = state => {
  return {
    projects: state.global.projects,
  };
}

export default connect(mapStateToProps, null)(Home);