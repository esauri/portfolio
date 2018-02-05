import React from 'react';
import TiMail from 'react-icons/lib/ti/mail';
import TiArrowUp from 'react-icons/lib/ti/arrow-up';
import TiLightbulb from 'react-icons/lib/ti/lightbulb';
import TiSocialGithub from 'react-icons/lib/ti/social-github';
import TiSocialLinkedIn from 'react-icons/lib/ti/social-linkedin';

// Utils
import links from './../../utils/getUsefulLinks';

// Styles
import styles from './styles.module.css';

export default ({ theme, backToTop, toggleTheme }) => (
  <footer className={`wrapper ${styles.footer}`}>
    <section className={styles.grid_item}>
      <h5>Get in contact</h5>
      <ul className={styles.social_links}>
        <li className={styles.social_link}>
          <a className={styles.footer_action} href={`mailto:${links.email}`}>
            <span className={styles.footer_icon}>
              <TiMail size={28} />
            </span>
            ejs3863[at]rit.edu
          </a>
        </li>
        <li className={styles.social_link}>
          <p>&copy; {new Date().getFullYear()} Erick Sauri</p>
        </li>
      </ul>
    </section>
    <section className={styles.grid_item}>
      <h5>Social Media</h5>
      <ul className={styles.social_links}>
        <li className={styles.social_link}>
          <a className={styles.footer_action} href={links.linkedIn} target='_blank' rel={'noopener noreferrer'}>
            <span className={styles.footer_icon}>
              <TiSocialLinkedIn size={28} />
            </span>
            LinkedIn
          </a>
        </li>
        <li className={styles.social_link}>
          <a className={styles.footer_action} href={links.github} target={'_blank'} rel={'noopener noreferrer'}>
            <span className={styles.footer_icon}>
              <TiSocialGithub size={28} />
            </span>
            Github
          </a>
        </li>
      </ul>
    </section>
    <section className={styles.grid_item}>
      <h5>Options</h5>
      <ul className={styles.social_links}>
        <li className={styles.social_link}>
          <a className={styles.footer_action} onClick={toggleTheme}>
            <span className={styles.footer_icon}>
              <TiLightbulb size={22} />
            </span>
            { theme } Theme
          </a>
        </li>
        <li className={styles.social_link}>
          <a className={styles.footer_action} onClick={backToTop}>
            <span className={styles.footer_icon}>
              <TiArrowUp size={28} />
            </span>
            Back to Top
          </a>
        </li>
      </ul>
    </section>
  </footer>
);
