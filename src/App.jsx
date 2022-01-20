import React from 'react';
import { Switch, Route } from 'react-router-dom';



import Amenagements_jardin from './components/Amenagements_jardin';
import Meilleures_ventes from './components/Meilleures_ventes';
import Projets_cle_en_main from './components/Projets_cle_en_main';

import Home from './components/Home';

import './App.css';

function App() {
  return (
    <div className="App">
      <Home />
      
      <div>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/Projets_cle_en_main" component={Projets_cle_en_main} />
            <Route path="/Amenagements_jardin" component={Amenagements_jardin} />
            <Route path="/Meilleures_ventes" component={Meilleures_ventes} />
            
          </Switch>
        </div>
        
    
      </div>
    </div>
  );
}

export default App;
