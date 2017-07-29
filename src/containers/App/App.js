import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

// Main Container
import Home from './../Home/Home';
import Main from './../Main/Main';
import About from './../About/About';
import NotFound from './../NotFound/NotFound';
import TrumpCard from './../TrumpCard/TrumpCard';
import Horsemasks from './../Horsemasks/Horsemasks';
import ClickerGame from './../ClickerGame/ClickerGame';
import TwoSevenZero from './../TwoSevenZero/TwoSevenZero';
import AudioVisualizer from './../AudioVisualizer/AudioVisualizer';

// Create store
import store from './../../store/store';

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
