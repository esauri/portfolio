import React, { PureComponent } from 'react';
import styles from './styles.module.css';

class ProjectDetail extends PureComponent {
  render() {
    return (
      <h4 className={styles.project_detail}>
        { this.props.children }
      </h4>
    );
  }
}

export default ProjectDetail;
