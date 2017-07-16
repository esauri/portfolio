import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Main Container

import Main from './../Main/Main';
import About from './../About/About';
import AudioVisualizer from './../AudioVisualizer/AudioVisualizer';
import TwoSevenZero from './../TwoSevenZero/TwoSevenZero';
import ClickerGame from './../ClickerGame/ClickerGame';
import Horsemasks from './../Horsemasks/Horsemasks';
import TrumpCard from './../TrumpCard/TrumpCard';
import NotFound from './../NotFound/NotFound';

// Create store
import store from './../../store/store';

const Home = () => <h1>Erick Sauri Home</h1>;

class App extends Component {
  render() {
    return (
     <BrowserRouter>
        <Provider store={store}>
          <Main>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/audiovisualizer' component={AudioVisualizer} />
              <Route exact path='/twosevenzero' component={TwoSevenZero} />
              <Route exact path='/clickergame' component={ClickerGame} />
              <Route exact path='/horsemask' component={Horsemasks} />
              <Route exact path='/trumpcard' component={TrumpCard} />
              <Route component={NotFound} />
            </Switch>
          </Main>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
