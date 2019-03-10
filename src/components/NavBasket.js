import React from 'react';
import { NavLink } from 'react-router-dom';
import candyshop from '../content/candyshop.jpg';
import basket from '../content/basket.jpg';
import {ShoppingCartRX} from './ShoppingCart.js';
import {ShoppingBasketRX} from './ShoppingBasket.js'
import {connect} from 'react-redux';
// import {transmit} from '.././redux.js';
import {mapStateToProps, mapDispatchToProps} from './ProductFooter.js';


class NavBasket extends React.Component {
  render() {
    return(
      <nav className="navbar bg-success">
          <img src={candyshop} width="25%" alt="X"/>
          <img src={candyshop} width="25%" alt="X"/>
          <img src={candyshop} width="25%" alt="X"/>
          <img src={candyshop} width="25%" alt="X"/>
        <h3 className="title bg-success text-light p-2">welcome to the candyshop</h3>
        <section className="d-flex bg-light my-1 p-1">
          <img className="p-1 img-thumbnail mx-auto" src={basket} alt="X" width="25%"/>
          <ShoppingCartRX />
          <ShoppingBasketRX />
          <img className="p-1 img-thumbnail mx-auto" src={basket} alt="X" width="25%"/>
        </section>
        <span className="d-flex bg-success">
          <NavLink to='/'className="nav-link text-warning">home</NavLink>
          <NavLink to='/chocolades/products'className="nav-link text-light">chocolades</NavLink>
          <NavLink to='/candys/products'className="nav-link text-light">candys</NavLink>
          <NavLink to='/pastrys/products'className="nav-link text-light">pastrys</NavLink>
        </span>
      </nav>
    )
  }
}
export const NavBasketRX = connect(mapStateToProps,mapDispatchToProps)(NavBasket);
