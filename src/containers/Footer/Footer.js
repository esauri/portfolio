import React from 'react';
import TiMail from 'react-icons/lib/ti/mail';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import TiSocialLinkedIn from 'react-icons/lib/ti/social-linkedin';

// Utils
import links from './../../utils/getUsefulLinks';

// Styles
import styles from './styles.module.css';

const iconSize = 28;

export default () => (
  <footer className={`wrapper ${styles.footer}`}>
    <section className={styles.grid_item}>
      <ul className={styles.social_links}>
        <li className={styles.social_link}>
          <a className={styles.footer_action} href={`mailto:${links.email}`}>
            <span className={styles.footer_icon}>
              <TiMail size={iconSize} />
            </span>
          </a>
        </li>
        <li className={styles.social_link}>
          <a className={styles.footer_action} href={links.linkedIn} target='_blank' rel={'noopener noreferrer'}>
            <span className={styles.footer_icon}>
              <TiSocialLinkedIn size={iconSize} />
            </span>
          </a>
        </li>
        <li className={styles.social_link}>
          <a className={styles.footer_action} href={links.github} target={'_blank'} rel={'noopener noreferrer'}>
            <span className={styles.footer_icon}>
              <TiSocialGithub size={iconSize} />
            </span>
          </a>
        </li>
      </ul>
      <p>&copy; {new Date().getFullYear()} Erick Sauri</p>
    </section>
  </footer>
);
