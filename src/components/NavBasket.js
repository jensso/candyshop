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
        <NavLink to='/'className="text-light">
          <img src={candyshop} width="25%" alt="X"/>
          <img src={candyshop} width="25%" alt="X"/>
          <img src={candyshop} width="25%" alt="X"/>
          <img src={candyshop} width="25%" alt="X"/>
        </NavLink>
        <h3 className="title bg-success text-light p-2">welcome to the candyshop</h3>
        <section className="d-flex bg-light my-1 p-1">
        <img className="p-1" src={basket} alt="X" width="25%" height="40%"/>
        <ShoppingCartRX />
        <ShoppingBasketRX />
        <img className="p-1" src={basket} alt="X" width="25%" height="40%"/>
        </section>
      </nav>
    )
  }
}
export const NavBasketRX = connect(mapStateToProps,mapDispatchToProps)(NavBasket);
