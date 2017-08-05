import React, { Component } from 'react';
import * as PIXI from 'pixi.js';
import TiMediaPause from 'react-icons/lib/ti/media-pause';
import TiMediaPlay from 'react-icons/lib/ti/media-play';
import styles from './styles.module.css';
import { getRandomBetween } from './../../utils/getRandomBetween';
import { getRandomIntBetween } from './../../utils/getRandomIntBetween';

class MidnightCruise extends Component {
  constructor (props) {
    super(props);

    this.state = {
      run: true,
    };

    // Default size of window
    const size = [1920, 1080];

    // Ration
    this.ratio = size[0] / size[1];

    // Create PIXI game
    this.game = new PIXI.Application(size[0], size[1], { antialias: true, transparent: true, });

    // Stars
    this.stars = [];

    // Bind canvas animate
    this.resizeEvent = this.resizeEvent.bind(this);
    this.startCanvas = this.startCanvas.bind(this);
    this.scrollEvent = this.scrollEvent.bind(this);
    this.updateCanvas = this.updateCanvas.bind(this);
    this.toggleAnimation = this.toggleAnimation.bind(this);
  }

  componentDidMount() {
    // Setup PIXI canvas
    this.refs.midnightCruiseCanvas.appendChild(this.game.view);

    // Run resize to check
    this.resizeEvent();

    // Draw canvas
    this.startCanvas();

    // Add event listeners
    window.addEventListener('resize', this.resizeEvent, { passive: true });
    window.addEventListener('scroll', this.scrollEvent, { passive: true });
  }

  componentWillUnmount() {
    // Remove event listeners
    window.removeEventListener('resize', this.resizeEvent);
    window.removeEventListener('scroll', this.scrollEvent);

    // Empty out our stars
    this.stars = [];

    // Destroy ticker
    this.game.ticker.destroy();

    // Destroy stage
    this.game.stage.destroy(true);

    // Remove canvas element
    this.refs.midnightCruiseCanvas.removeChild(this.game.view);

    // Destroy renderer
    this.game.renderer.destroy(true);

    // Nullify renderer
    this.game.renderer = null;
  }

  /**
   * resizeEvent - Resizes canvas
   *
   */
  resizeEvent() {
    const { innerWidth, innerHeight } = window;
    let width = 0;
    let height = 0;

    if (innerWidth / innerHeight >= this.ratio) {
      width = innerHeight * this.ratio;
      height = innerHeight;
    } else {
      width = innerWidth;
      height = innerWidth / this.ratio;
    }

    this.game.renderer.view.style.width = `${width}px`;
    this.game.renderer.view.style.height = `${height}px`;
  }

  scrollEvent() {
    const { run } = this.state;
    const canvasBottom = this.refs.midnightCruiseCanvas.getBoundingClientRect().bottom;

    // If canvas is not in view
    if (canvasBottom < 0) {
      // Stop ticker
      this.game.ticker.stop();
    } else if (run && !this.game.ticker.started) {
      // Otherwise if animation is set to run but is paused
      // Start again
      this.game.ticker.start();
    }
  }

  /**
   * createCircle - Helper function whihc returns a new random circle
   *
   * @param {bool} reset
   * @returns
   */
  createCircle(reset = false) {
    // Create circle properties
    const circle = {
      x: (reset) ? getRandomIntBetween(5, 10) + this.game.renderer.width
        : getRandomIntBetween(5, this.game.renderer.width),
      y: Math.random() * this.game.renderer.height,
      radius: getRandomIntBetween(1, 4),
      alpha: getRandomBetween(0.3, 1),
    };

    // Return circle
    return circle;
  }

  /**
   * startCanvas - Starts the experience
   *
   */
  startCanvas() {
    // If we have a WebGL renderer make many stars otherwise just a few
    const TOTAL_STARS = PIXI.WebGLRenderer ? 1000 : 100;

    // For every star we want to make
    for (let i = 0; i < TOTAL_STARS; i++) {
      // Create a star
      const star = new PIXI.Graphics();

      // Create a circle
      const circle = this.createCircle();

      // Draw star
      star.lineStyle(0);
      star.beginFill(0xFFFFFF, circle.alpha);
      star.drawCircle(circle.x, circle.y, circle.radius);
      star.endFill();

      // Add star to stars so we can keep an easy access to it
      this.stars.push(star);

      // Add star to stage
      this.game.stage.addChild(star);
    }

    // Commence animation loop
    this.game.ticker.add(this.updateCanvas);
  }

  /**
   * updateCanvas- Updates the experience
   *
   */
  updateCanvas() {
    // If we have are running and have stars
    if (this.stars.length > 0) {
      // Loop through them
      this.stars.forEach((star) => {
        // Get current star graphic data
        const circle = star.graphicsData[0];

        // Clear current star
        star.clear();
        // If star is in bounds
        if (circle.shape.x > 0) {
          // Move it left
          star.beginFill(circle.fillColor, circle.fillAlpha);
          star.drawCircle(circle.shape.x - getRandomBetween(1, 3), circle.shape.y, circle.shape.radius);
        } else {
          // Otherwise if star is out of bounds
          // Create new circle properties
          const newCircle = this.createCircle(true);
          // Reset star to new circle
          star.beginFill(0xFFFFFF, newCircle.alpha);
          star.drawCircle(newCircle.x, newCircle.y, newCircle.radius);
        }

        // End fill
        star.endFill();
      });
    }
  }

  /**
   * toggleAnimation - Toggles between animating the canvas
   *
   */
  toggleAnimation() {
    const { run } = this.state;

    // If currently running
    if (run) {
      // Stop ticker
      this.game.ticker.stop();
    } else {
      // Otherwise start
      this.game.ticker.start();
    }

    // Set run
    this.setState({
      run: !run,
    });
  }

  render() {
    const { run } = this.state;
    const icon = (run) ? (<TiMediaPause className={styles.icon} size={30} />) : (<TiMediaPlay className={styles.icon} size={30} />);

    return (
      <div
        className={`${styles.canvas}`}
        ref={'midnightCruiseCanvas'}
      >
      { this.props.children }
      <button className={styles.toggle} onClickCapture={this.toggleAnimation}>
        {icon}
      </button>
      </div>
    );
  }
}

export default MidnightCruise;
