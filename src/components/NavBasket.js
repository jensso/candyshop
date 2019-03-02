import React from 'react';
import { NavLink } from 'react-router-dom';
import candyshop from '../content/candyshop.jpg';
import basket from '../content/basket.jpg';
import {ShoppingCartRX} from './ShoppingCart.js';
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
        <section className="d-flex flex-end bg-light m-1 p-2"><img className="p-2" src={basket} alt="X" width="40%" height="40%"/>
        <ShoppingCartRX />
        </section>
      </nav>
    )
  }
}
export const NavBasketRX = connect(mapStateToProps,mapDispatchToProps)(NavBasket);
