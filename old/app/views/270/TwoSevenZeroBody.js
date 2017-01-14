import React from 'react';

// Create TwoSevenZeroBody class
export default class TwoSevenZeroBody extends React.Component {

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
          <iframe src='https://player.vimeo.com/video/183411950' width='420' height='236' frameBorder='0' allowFullScreen></iframe>
        </div>
        <h5>Early Mockups</h5>
        <h6>Main Views</h6>
        <p>
          Originally, the app was going to have a <strong>Messages</strong> tab where
          players would get fake messages from superpacs, fundraisers, and other interest groups.
          They would award players game currency to purchase hints.
          Notice how a state's electoral votes appeared on the right-hand corner of the state screen. Initially,
          players would get votes based on whether or not they answered a question correctly.
          In the end I ended up staying closer to the actuall electoral college by only awarding the entire state votes
          if the player has more than 51% of the vote. That is why I switched to percentages.
        </p>
        <ul className='row row-3'>
          <li className='row-item'><img src='./img/270/splashscreen.png' alt='270 Splash Screen' title='Splash Screen' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/270/mainscreen.png' alt='270 Home Screen' title='Home Screen' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/270/statescreen.png' alt='270 State Screen' title='State Screen' className='gallery-image'/></li>
        </ul>

        <h6>International Relations Trivia</h6>
        <p>
          Initially, I had planned for trivia tabs that could help player answer questions but would have a cost in game currency.
          But since I was the only one working on the game and had a limited schedule I did not implement this functionality.
        </p>
        <ul className='row row-3'>
          <li className='row-item'><img src='./img/270/questiontriviascreen.png' alt='270 International Relations Trivia Screen' title='International Relations Trivia Screen' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/270/questiononecorrect.png' alt='270 International Relations Trivia Screen Correct' title='International Relations Trivia Correct' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/270/questiononewrong.png' alt='270 International Relations Trivia Screen Incorrect' title='International Relations Trivia Incorrect' className='gallery-image'/></li>
        </ul>

        <h6>State Knowledge Trivia</h6>
        <p>
          Trivia would have categories, these where later reduced to <strong>People</strong>, <strong>Government</strong>, <strong>History</strong>, <strong>Locations</strong> and <strong>International Relations</strong>.
        </p>
        <ul className='row row-3'>
          <li className='row-item'><img src='./img/270/questiontriviatwo.png' alt='270 State Knowledge Trivia Screen' title='State Knowledge Trivia Screen' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/270/questiontwocorrect.png' alt='270 State Knowledge Trivia Screen Correct' title='State Knowledge Trivia Correct' className='gallery-image'/></li>
          <li className='row-item'><img src='./img/270/questiontwowrong.png' alt='270 State Knowledge Trivia Screen Incorrect' title='State Knowledge Trivia Incorrect' className='gallery-image'/></li>
        </ul>
      </section>
    );
  }

  // Render function
  render() {
    // cache the markup
    const twoSevenZeroBody = this.createMarkup();

    // Return markup
    return (
      twoSevenZeroBody
    );
  }
}
