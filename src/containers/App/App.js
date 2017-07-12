import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// Main Container
import Main from './../Main/Main';

const Home = () => <h1>Erick Sauri Home</h1>;
const About = () => <h1>My About page</h1>;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Main>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
          </Switch>
        </Main>
      </BrowserRouter>
    );
  }
}

export default App;
