import React from 'react';

// Footer class
export default class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  // 🇵🇷
  render() {
    return (
      <footer>
        <ul className='social-links'>
          <li>
            <a className='icon ion-email' href='mailto:ejs3863@g.rit.edu' target='_blank'></a>
          </li>
          <li>
            <a className='icon ion-social-github' href='https://github.com/esauri' target='_blank'></a>
          </li>
          <li>
            <a className='icon ion-social-linkedin' href='https://www.linkedin.com/in/erick-sauri-1847357b' target='_blank'></a>
          </li>
          <li>
            <button className='icon ion-arrow-up-c scroll-to-top'></button>
          </li>
        </ul>
  			<p className='copyright'>&copy; 2016 Erick Sauri</p>
  		</footer>
    );
  }
}
