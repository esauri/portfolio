import React from 'react';

// Create ClickerGameBody class
export default class ClickerGameBody extends React.Component {

  // Create constructor
  constructor() {
    super();
  }

  // Function which holds markup
  createMarkup() {
    return(
      <section>
        <h5>Video</h5>
        <div className='video-responsive'>
          <iframe src='https://player.vimeo.com/video/183410426' width='420' height='315' frameBorder='0' allowFullScreen></iframe>
        </div>
        <h5>Gallery</h5>
        <h6>Splash &amp; Instructions</h6>
        <p>If players read the instructions they learn they can skip the tutorials.</p>
        <ul className='row row-2'>
          <li className='row-item'><img src='./img/clickergame/splashscreen.png' alt='Clicker Game Splash Screen' title='Splash Screen' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/clickergame/instructions.png' alt='Clicker Game Instructions Screen' title='How to Play' className='gallery-image'/></li>
        </ul>
        <h6>Tutorial Scenes</h6>
        <p>Players learn the mechanics through three short tutorials.</p>
        <ul className='row row-3'>
          <li className='row-item'><img src='./img/clickergame/tutorialone.png' alt='Clicker Game First Tutorial Screen' title='First Tutorial' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/clickergame/tutorialtwo.png' alt='Clicker Game Second Tutorial Screen' title='Second Tutorial' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/clickergame/tutorialthree.png' alt='Clicker Game Third Tutorial Screen' title='Third Tutorial' className='gallery-image'/></li>
        </ul>
        <h6>Tutorial End Scenes</h6>
        <p>Since the game is endless, succeeding during the tutorials is crucial to prepare the player.</p>
        <ul className='row row-2'>
          <li className='row-item'><img src='./img/clickergame/tutorialfail.png' alt='Clicker Game Tutorial Fail Screen' title='Failed Tutorial' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/clickergame/tutorialend.png' alt='Clicker Game Turorial End Screen' title='Tutorial Finish' className='gallery-image'/></li>
        </ul>
        <h6>Pause &amp; Game Over</h6>
        <ul className='row row-2'>
          <li className='row-item'><img src='./img/clickergame/pausegame.png' alt='Clicker Game Pause Screen' title='Pause' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/clickergame/gameover.png' alt='Clicker Game Game Over Screen' title='Game Over' className='gallery-image'/></li>
        </ul>
        <h6>Main Game Scene</h6>
        <ul className='row'>
          <li className='row-item'>
            <img src='./img/clickergame/clickergame.png' alt='Clicker Game Game Screen' title='Game' className='gallery-image'/>
          </li>
        </ul>
      </section>
    );
  }

  // Render function
  render() {
    // cache the markup
    const clickerGameBody = this.createMarkup();

    // Return markup
    return (
      clickerGameBody
    );
  }
}
