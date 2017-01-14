import React from 'react';
import { Link } from 'react-router';

export default class Project extends React.Component {
  render () {
    const {project} = this.props;

    return (
      <li className='project-item'>
        <Link to={project.link} className='project-wrapper'>
          <section id={project.name} className='project-image'></section>
          <section className='project-blurb'>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </section>
        </Link>
      </li>
    );
  }
}
