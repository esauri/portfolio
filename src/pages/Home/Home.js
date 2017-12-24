import React from 'react';

// Components
import Row from './../../components/Row/Row';
import Card from './../../components/Card/Card';
import Column from './../../components/Column/Column';

// Styles
import styles from './styles.module.css';

import projects from './../../utils/getProjectList';

export default () => (
  <article>
    <section className={`wrapper`}>
      <Row>
        <Column space={'70'}>
          <h2 className={styles.intro}>
            Hi there, I'm <span className={styles.intro_accent}>Erick</span>, a <span className={styles.intro_accent}>front-end developer</span>
            &nbsp;
            who works on <span className={styles.intro_accent}>web</span> and <span className={styles.intro_accent}>mobile apps</span>.
          </h2>
        </Column>
      </Row>
    </section>
    {/* Projects */}
    <Row wrap>
      {
        projects.map((project, index) => {
          return (
            <Column key={index} space={100} full>
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
