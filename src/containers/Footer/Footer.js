import React from 'react';
import TiMail from 'react-icons/lib/ti/mail';
import TiArrowUp from 'react-icons/lib/ti/arrow-up';
import TiDocument from 'react-icons/lib/ti/document';
import TiLightbulb from 'react-icons/lib/ti/lightbulb';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import TiSocialLinkedIn from 'react-icons/lib/ti/social-linkedin';

// Utils
import links from './../../utils/getUsefulLinks';

// Styles
import styles from './styles.module.css';

export default ({ backToTop, toggleTheme }) => (
  <footer className={`wrapper ${styles.footer}`}>
    <ul className={styles.social_links}>
      <li className={styles.social_link}>
        <a href={`mailto:${links.email}`}>
          <TiMail size={30} />
        </a>
      </li>
      <li className={styles.social_link}>
        <a href={links.resume} target='_blank' rel={'noopener noreferrer'}>
          <TiDocument size={24} />
        </a>
      </li>
      <li className={styles.social_link}>
        <a href={links.linkedIn} target='_blank' rel={'noopener noreferrer'}>
          <TiSocialLinkedIn size={30} />
        </a>
      </li>
      <li className={styles.social_link}>
        <a href={links.github} target={'_blank'} rel={'noopener noreferrer'}>
          <TiSocialGithub size={30} />
        </a>
      </li>
      <li className={styles.social_link}>
        <a onClick={toggleTheme}>
          <TiLightbulb size={20} />
        </a>
      </li>
      <li className={styles.social_link}>
        <a onClick={backToTop}>
          <TiArrowUp size={30} />
        </a>
      </li>
    </ul>
    <p>&copy; 2017 Erick Sauri</p>
  </footer>
);
