import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const NavSectionTitle = ({ children }) => (<h3 className={styles.section_title}>{children}</h3>);
const NavList = ({ children, secondary }) => (<ul className={`${styles.nav_list} ${secondary ? styles.nav_list_secondary : ''}`}>{ children }</ul>);
const NavItem = ({ children }) => (<li className={styles.nav_item}>{ children }</li>);

const ProjectLink = ({ children, to, onClick }) => (<Link className={styles.project_link} to={to} onClick={onClick}>{ children }</Link>);
const ProjectImage = ({ alt, src }) => (<img className={styles.project_img} alt={alt} src={src} />);
const ProjectLabel = ({ children }) => (<section className={styles.project_label}>{ children }</section>);
const ProjectTitle = ({ children }) => (<h3 className={styles.project_title}>{ children }</h3>);
const ProjectDescription = ({ children }) => (<p className={styles.project_desc}>{ children }</p>);

export {
  NavList,
  NavItem,
  ProjectLink,
  ProjectImage,
  ProjectLabel,
  ProjectTitle,
  NavSectionTitle,
  ProjectDescription,
};