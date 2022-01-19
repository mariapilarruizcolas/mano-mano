import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBarr.css';

function NavBarr() {
  return (
    <div>
      <div className="NavBarrDescktop">
        <ul className="Header">
          <li className="navBar">
            <NavLink activeClassName="active" to="/">
              <img className="logo" src="../img/logo.png" alt="ManoMano" />
            </NavLink>
          </li>
          <li className="navBar">
            <NavLink activeClassName="active" to="/Projets_cle_en_main">
              Projets cle en main
            </NavLink>
          </li>
          <li className="navBar">
            <NavLink activeClassName="active" to="/Soldes">
              Soldes
            </NavLink>
          </li>
          <li className="navBar">
            <NavLink activeClassName="active" to="/Meilleurs_Ventes">
              Meilleurs Ventes
            </NavLink>
          </li>
          <li className="navBar">
            <NavLink activeClassName="active" to="/Amenagements_jardin">
              Amenagements du jardin 
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    )}
     

export default NavBarr;
