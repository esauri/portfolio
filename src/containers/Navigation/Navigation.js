import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Components
import Nav from './../../components/GlobalNavigation/GlobalNavigation';
import DropdownNavigation from './../../components/DropdownNavigation/DropdownNavigation';
import {
  NavList,
  NavItem,
  ProjectLink,
  ProjectImage,
  ProjectLabel,
  ProjectTitle,
  NavSectionTitle,
  ProjectDescription,
} from './../../components/Nav/Nav';

// Utils
import playground from './../../utils/getPlaygroundList';
import projects from './../../utils/getProjectList';
import links from './../../utils/getUsefulLinks';

// Styles
import styles from './styles.module.css';

class Navigation extends Component {

  constructor(props) {
    super(props);

    this.state = { showDropdown: false };
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown(show) {
    this.setState({ showDropdown: show });
  }

  render() {
    const { showDropdown } = this.state;

    return (
      <Nav className={styles.a}>
        {/* About */}
        <Link className={styles.link} to='/about'>About</Link>

        {/* Work */}
        <span
          className={styles.link}
          onMouseEnter={() => this.toggleDropdown(true) }
          onTouchStart={() => this.toggleDropdown(!showDropdown) }
          onMouseLeave={() => setTimeout(() => { this.toggleDropdown(false); }, 50) }>
          Work

          <DropdownNavigation show={showDropdown}>

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
                          <ProjectDescription>{project.desc}</ProjectDescription>
                        </ProjectLabel>
                      </ProjectLink>
                    </NavItem>
                  );
                })
              }
            </NavList>
            {/* Playground */}
            <NavSectionTitle>Playground</NavSectionTitle>
            <NavList secondary>
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
          </DropdownNavigation>
        </span>
        {/* Github */}
        <a className={styles.link} href={links.github} target={'_blank'} rel={'noopener noreferrer'}>
          Github
        </a>
        {/* Resume */}
        <a className={styles.link} href={links.resume} target={'_blank'} rel={'noopener noreferrer'}>
          Resume
        </a>
      </Nav>
    );
  }
}

export default Navigation;

