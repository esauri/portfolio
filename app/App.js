import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

// Import components
import Layout from './components/Layout';

// Import views
import About from './views/about/About';
import AdmitOne from './views/admitone/AdmitOne';
import AudioVisualizer from './views/audiovisualizer/AudioVisualizer';
import ClickerGame from './views/clickergame/ClickerGame';
import Home from './views/home/Home';
import Nest from './views/nest/Nest';
import NotFound from './views/404/NotFound';
import TwoSevenZero from './views/270/TwoSevenZero';

export default class App extends React.Component {
  // Create constructor
  constructor() {
    super();
  }

  // Render function
  render () {
    // Return Router which handles routing
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={hashHistory}>
        <Route path='/' component={Layout}>
          <IndexRoute component={Home} name='Home'></IndexRoute>
          <Route path='/270' name='TwoSevenZero' component={TwoSevenZero}></Route>
          <Route path='/about' name='About' component={About}></Route>
          <Route path='/admitone' name='AdmitOne' component={AdmitOne}></Route>
          <Route path='/audiovisualizer' name='AudioVisualizer' component={AudioVisualizer}></Route>
          <Route path='/clickergame' name='ClickerGame' component={ClickerGame}></Route>
          <Route path='/nest' name='Nest' component={Nest}></Route>
          <Route path='*' name='404' component={NotFound}></Route>
        </Route>
      </Router>
    );
  }
}
