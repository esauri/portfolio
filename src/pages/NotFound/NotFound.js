import React from 'react';

// Components
import Row from './../../components/Row/Row';
import Card from './../../components/Card/Card';
import Column from './../../components/Column/Column';
import ButtonLink from './../../components/ButtonLink/ButtonLink';
import MidnightCruise from './../../containers/MidnightCruise/MidnightCruise';

// Utils
import projects from './../../utils/getProjectList';

// Styles
import styles from './styles.module.css';

export default () => (
  <article className={styles.container}>
    <MidnightCruise>
      <section className={`wrapper`}>
        <h3>Space is a cold, lonely place.</h3>
        <p>Whatever you were looking for it ain't here...</p>
        <ButtonLink to={'/'}>Warp Home</ButtonLink>
      </section>
    </MidnightCruise>
    <Row wrap>
      {
        projects
          .map((project, index, list) => {
            return (
              <Column key={index} space={parseInt(100 / list.length, 10)} full>
                <Card
                  project={project}
                />
              </Column>
            );
          })
      }
    </Row>
  </article>
);
