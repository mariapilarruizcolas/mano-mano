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
      </ul>
        <ul className="Header">
        <li className="navBar">
            <NavLink activeClassName="active" to="/Notice">
              Notice
            </NavLink>
          </li>
        <li className="navBar">
            <NavLink activeClassName="active" to="/Projets_cle_en_main">
              Projets cle en main
            </NavLink>
          </li>
        <li className="navBar">
            <NavLink activeClassName="active" to="/Menu">
              Menu
            </NavLink>
          </li>
          <li className="navBar">
            <NavLink activeClassName="active" to="/Radiateur_electrique">
              Radiateur electrique
            </NavLink>
          </li>
          <li className="navBar">
            <NavLink activeClassName="active" to="/Suspension">
              Suspension
            </NavLink>
          </li>
        <li className="navBar">
            <NavLink activeClassName="active" to="/Bibliotheque">
              Bibliotheque
            </NavLink>
          </li>
        <li className="navBar">
            <NavLink activeClassName="active" to="/Radiateur_electrique">
              Radiateur electrique
            </NavLink>
          </li>
        <li className="navBar">
            <NavLink activeClassName="active" to="/Bons_plans">
              Bons plans
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
          <li className="navBar">
            <NavLink activeClassName="active" to="/Made_in_Italie">
              Made in Italie
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
    )}
     

export default NavBarr;
