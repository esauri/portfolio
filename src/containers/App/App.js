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
import Poseidon from './../../pages/Poseidon/Poseidon';
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
          <Route exact path={'/audiovisualizer'} component={() => <AudioVisualizer route={'/audiovisualizer'} />} />
          <Route exact path={'/twosevenzero'} component={() => <TwoSevenZero route={'/twosevenzero'} />} />
          <Route exact path={'/clickergame'} component={() => <ClickerGame route={'/clickergame'} />} />
          <Route exact path={'/horsemask'} component={() => <Horsemasks route={'/horsemask'} />} />
          <Route exact path={'/poseidon'} component={() => <Poseidon route={'/poseidon'} />} />
          <Route exact path={'/trumpcard'} component={() => <TrumpCard route={'/trumpcard'} />} />
          <Route exact path={'/venu'} component={() => <Venu route={'/venu'} />} />
          <Route component={NotFound} />
        </Switch>
      </Main>
    </ScrollToTop>
  </BrowserRouter>
);
