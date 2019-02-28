import React from 'react';
import { NavLink } from 'react-router-dom';
import candy from '../content/candy.jpg';
import pastry from '../content/pastry.jpg';
import choco from '../content/choco.jpg';

export class Home extends React.Component {
  render() {
    return(
        <>
        <div className="jumbotron d-flex bg-success p-2 m-1">
          <NavLink className="m-1 p-2 nav-link lead bg-light" to="/pastrys">
                          see our delicious pastrys <img src={pastry} width="100%" alt="X"/></NavLink>
          <NavLink className="m-1 p-1 nav-link lead bg-light" to="/candys">
                          find our Selection of candys<img src={candy} width="100%" alt="X"/></NavLink>
          <NavLink className="m-1 p-2 nav-link lead bg-light" to="/chocolades">
              find chocolates from different countrys<img src={choco} width="100%" alt="X"/></NavLink>
        </div>
        </>
    )
  }
}
