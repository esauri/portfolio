import React, { Component } from 'react';
import styles from './styles.module.css';

class Picture extends Component {
  componentDidMount() {
    // Get zooming - right now we give zoom to first <Picture /> in container
    const { zooming } = this.props;

    // If zooming
    if (zooming) {
      // Add event listener
      zooming.listen(`.${styles.picture}`);
    }
  }

  render() {
    const { alt, src } = this.props;

    return (
      <img className={styles.picture} alt={alt} src={src} />
    );
  }
}

export default Picture;
