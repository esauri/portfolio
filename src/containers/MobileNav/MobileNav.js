import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {
  NavList,
  NavItem,
  ProjectLink,
  ProjectImage,
  ProjectLabel,
  ProjectTitle,
  NavSectionTitle,
} from './../../components/Nav/Nav';
import PopupNavigation from './../../components/PopupNavigation/PopupNavigation';
import HamburgerIcon from './../../components/HamburgerIcon/HamburgerIcon';
import CloseIcon from './../../components/CloseIcon/CloseIcon';

// Utils
import playground from './../../utils/getPlaygroundList';
import projects from './../../utils/getProjectList';
import links from './../../utils/getUsefulLinks';

import styles from './styles.module.css';

class MobileNav extends Component {

  constructor(props) {
    super(props);

    this.state = { openMenu: false, };
    this.togglePopupMenu = this.togglePopupMenu.bind(this);
  }

  togglePopupMenu(open) {
    this.setState({ openMenu: open });
  }

  render() {
    const { openMenu } = this.state;

    return openMenu
      ? (
        <section className={styles.popup_container}>
          <PopupNavigation>
            {/* Close button */}
            <CloseIcon onClickEvent={() => { this.togglePopupMenu(false); }} />
            {/* Projects */}
            <NavSectionTitle>Projects</NavSectionTitle>
            <NavList>
              {
                projects.map((project, index) => {
                  return (
                    <NavItem key={index}>
                      <ProjectLink to={project.link}>
                        <ProjectImage alt={project.avatar.desc} src={project.avatar.src} />
                        <ProjectLabel>
                          <ProjectTitle>{project.name}</ProjectTitle>
                        </ProjectLabel>
                      </ProjectLink>
                    </NavItem>
                  );
                })
              }
              {
                playground.map((project, index) => {
                  return (
                    <NavItem key={index}>
                      <ProjectLink to={project.link}>
                        <ProjectImage alt={project.avatar.desc} src={project.avatar.src} />
                        <ProjectLabel>
                          <ProjectTitle>{project.name}</ProjectTitle>
                        </ProjectLabel>
                      </ProjectLink>
                    </NavItem>
                  );
                })
              }
            </NavList>
            {/* Secondary Links */}
            <NavSectionTitle>General</NavSectionTitle>
            <NavList secondary>
              <NavItem>
                <Link to=''>Home</Link>
              </NavItem>
              <NavItem>
                <Link to='/about'>About</Link>
              </NavItem>
              <NavItem>
                <a href={links.github} target={'_blank'} rel={'noopener noreferrer'}>
                  Github
                </a>
              </NavItem>
              <NavItem>
                <a href={links.resume} target={'_blank'} rel={'noopener noreferrer'}>
                  Resume
                </a>
              </NavItem>
            </NavList>
          </PopupNavigation>
        </section>
      )
      : (<HamburgerIcon onClickEvent={() => { this.togglePopupMenu(true); }} />);
  }
}

export default MobileNav;