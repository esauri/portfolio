import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './styles.module.css';
import Button from './../Button/Button';

class Carousel extends Component {
  render() {
    const settings = {
      arrows: true,
      accessability: true,
      speed: 500,
      slidesToShow: 1,
      dots: true,
      dotsClass: styles.dots,
      slidesToScroll: 1,
      touchToMove: true,
      centerMode: true,
      infinite: true,
      prevArrow: <Button>Previous</Button>,
      nextArrow: <Button>Next</Button>,
    };

    return (
      <Slider className={styles.carousel} {...settings}>
        {this.props.children}
      </Slider>
    );
  }
}

export default Carousel;
