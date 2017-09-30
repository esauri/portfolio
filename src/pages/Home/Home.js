import React from 'react';
import { connect } from 'react-redux';

// Components
import Row from './../../components/Row/Row';
import Card from './../../components/Card/Card';
import Column from './../../components/Column/Column';

// Styles
import styles from './styles.module.css';

const Home = ({ projects }) => (
  <article>
    <section className={'wrapper'}>
      <h2 className={styles.heading}>Hi there, I'm Erick Sauri! A front-end developer who works on web and mobile apps.</h2>
    </section>
    {/* Projects */}
    <section className={'w2rapper'}>
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
