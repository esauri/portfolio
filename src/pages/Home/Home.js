import React from 'react';
import TiArrowRight from 'react-icons/lib/ti/arrow-right';

// Components
import Row from './../../components/Row/Row';
import Card from './../../components/Card/Card';
import Column from './../../components/Column/Column';

// Styles
import styles from './styles.module.css';

import projects from './../../utils/getProjectList';

export default () => (
  <article>
    <section className={`wrapper pb-0`}>
      <Row>
        <Column space={'70'}>
          <h2 className={`${styles.intro} pb-0`}>
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
              <Column full key={index} space={50} classes={`${styles.project_item}`}>
                <Card
                  float
                  project={project}>
                </Card>
                <h3 className={styles.project_subtitle}>
                  view project
                  <TiArrowRight />
                </h3>
              </Column>
          );
        })
      }
      </Row>
  </article>
);
