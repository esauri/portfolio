import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// Main Container
import Main from './../Main/Main';
import About from './../About/About';
import AudioVisualizer from './../AudioVisualizer/AudioVisualizer';

const Home = () => <h1>Erick Sauri Home</h1>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/audiovisualizer' component={AudioVisualizer} />
          </Switch>
        </Main>
      </BrowserRouter>
    );
  }
}

export default App;
