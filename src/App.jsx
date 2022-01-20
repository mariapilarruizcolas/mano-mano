import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Sales from './components/Sales';
import GardenLandscaping from './components/GardenLandscaping';
import BestSells from './components/BestSells';
import turnkeyProject from './components/turnkeyProject';
import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      <div>
        <div>
          <Switch>
            <Route exact path="/" />
            <Route path="/turnkeyProject" component={turnkeyProject} />
            <Route path="/GardenLandscaping" component={GardenLandscaping} />
            <Route path="/BestSells" component={BestSells} />
            <Route path="/Sales" component={Sales} />
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default App;
