import React, { Component } from 'react';
// import styles from './styles.module.css';

class Picture extends Component {
  render() {
    const { alt, folder, src } = this.props;

    return (
      <img
        alt={alt}
        src={`./../../assets/img/${folder}/public/small/${src}`}
      />
    );
  }
}

export default Picture;
