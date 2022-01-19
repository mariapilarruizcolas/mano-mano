import React from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBarr from './components/NavBarr';
import Soldes from './components/Soldes';
import Amenagements_jardin from './components/Amenagements_jardin';
import Meilleures_ventes from './components/Meilleures_ventes';
import Projets_cle_en_main from './components/Projets_cle_en_main';

import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavBarr />
      <div className="title-home">
        <h2>Soldes d'hiver.</h2>
        <h3>Ici vous trouverez des prix réduits sur toute une série de produits pour bricoler, jardiner, aménager son chez soi. Maintenant. Là. Ici. En ce moment.</h3>
      </div>
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Projets_cle_en_main" component={Projets_cle_en_main} />
            <Route path="/Amenagements_jardin" component={Amenagements_jardin} />
            <Route path="/Meilleures_ventes" component={Meilleures_ventes} />
            <Route path="/Soldes" component={Soldes} />
          </Switch>
        </div>
    
      </div>
    </div>
  );
}

export default App;
