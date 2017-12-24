import React from 'react';
import { Switch, Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

// Containers
import Main from './../Main/Main';
import ScrollToTop from './../ScrollToTop/ScrollToTop';

// Pages
import Home from './../../pages/Home/Home';
import Venu from './../../pages/Venu/Venu';
import About from './../../pages/About/About';
import NotFound from './../../pages/NotFound/NotFound';
import TrumpCard from './../../pages/TrumpCard/TrumpCard';
import Horsemasks from './../../pages/Horsemasks/Horsemasks';
import ClickerGame from './../../pages/ClickerGame/ClickerGame';
import TwoSevenZero from './../../pages/TwoSevenZero/TwoSevenZero';
import AudioVisualizer from './../../pages/AudioVisualizer/AudioVisualizer';


export default () => (
  <BrowserRouter>
    <ScrollToTop>
      <Main>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/about'} component={About} />
          <Route exact path={'/audiovisualizer'} component={AudioVisualizer} />
          <Route exact path={'/twosevenzero'} component={TwoSevenZero} />
          <Route exact path={'/clickergame'} component={ClickerGame} />
          <Route exact path={'/horsemask'} component={Horsemasks} />
          <Route exact path={'/trumpcard'} component={TrumpCard} />
          <Route exact path={'/venu'} component={Venu} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </ScrollToTop>
  </BrowserRouter>
);
