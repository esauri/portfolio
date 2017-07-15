import React, { PureComponent } from 'react';
import styles from './styles.module.css';

class ProjectDetailContainer extends PureComponent {
  render() {
    return (
      <aside className={styles.project_details}>
        { this.props.children }
      </aside>
    );
  }
}

export default ProjectDetailContainer;
