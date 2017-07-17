import React, { Component } from 'react';
import Slider from 'react-slick';
import styles from './styles.module.css';
import Button from './../Button/Button';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    this.slider.slickPrev();
  }

  nextSlide() {
    this.slider.slickNext();
  }

  render() {
    const { auto, children, showButtons } = this.props;

    const settings = {
      arrows: false,
      autoplay: auto,
      autoplaySpeed: 3000,
      accessability: true,
      speed: 500,
      slidesToShow: (children.length > 3) ? 3 : children.length,
      dots: true,
      dotsClass: styles.dots,
      slidesToScroll: 1,
      touchToMove: true,
      centerMode: true,
      infinite: true,
      responsive: [
        {
          breakpoint: 1170,
          settings: {
            slidesToShow: (children.length > 3) ? 3 : children.length,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: (children.length > 2) ? 2 : children.length,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <section className={styles.container}>
        <Slider ref={c => this.slider = c } className={styles.carousel} {...settings}>
          {children}
        </Slider>
        {
          (showButtons) ? (
            <section className={styles.carousel_actions}>
              <Button onClick={this.previousSlide}>
                Previous
              </Button>
              <Button onClick={this.nextSlide}>
                Next
              </Button>
            </section>
          ) : null
        }
      </section>
    );
  }
}

export default Carousel;
