import React from 'react';
import { NavLink } from 'react-router-dom';
import candyshop from '../content/candyshop.jpg';
import basket from '../content/basket.jpg';
import {connect} from 'react-redux';
import {buyIt} from '.././redux.js';


export class NavBasket extends React.Component {
  render() {
    return(
      <nav className="navbar bg-success">
        <NavLink to='/'className="text-light">
          <img src={candyshop} width="25%" alt="X"/>
          <img src={candyshop} width="25%" alt="X"/>
          <img src={candyshop} width="25%" alt="X"/>
          <img src={candyshop} width="25%" alt="X"/>
        </NavLink>
        <h3 className="title bg-success text-light p-2">welcome to the candyshop</h3>
        <section className="d-flex bg-light m-1 p-2"><img className="p-2" src={basket} alt="X" width="20%" height="20%"/>
        your shopping-cart: </section>
      </nav>
    )
  }
}
