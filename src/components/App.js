import React from 'react';
// import './App.css';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';
import { Candys } from './Candys.js';
import { Chocolades } from './Chocolades.js';
import { Pastrys } from './Pastrys.js';
import { Home } from './Home.js';
import { NavBasketRX } from './NavBasket.js';
import { SubmitAreaRX } from './SubmitArea.js';
// import { RemoveOrderRX } from './RemoveOrder.js';
// import {ShoppingCartRX} from './ShoppingCart.js';
// import {ShoppingBasketRX} from './ShoppingBasket.js'
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './ProductFooter.js';
import { MoreInfo } from './MoreInfo.js';

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <>
        {!this.props.submitted && <Route path='/' render={()=> <NavBasketRX />}/>}
        {!this.props.submitted && <Route exact path='/' render={()=> <NavLink className="display-1 text-center m-2 nav-link text-success" to='/start'>go to sweets</NavLink>}/>}
        {this.props.submitted && <SubmitAreaRX />}

        <Route path='/start' render={()=> <Home />}/>

        <Switch>
          <Route path='/products/more' render={()=> <MoreInfo />}/>
          <Route path='/candys' render={()=> <Candys />}/>
          <Route path='/chocolades' render={()=> <Chocolades />}/>
          <Route path='/pastrys' render={()=> <Pastrys />}/>
          <Route path='/submit' render={()=> <SubmitAreaRX />}/>
        </Switch>
        </>
      </BrowserRouter>
    )
  }
}
export const AppRX = connect(mapStateToProps, mapDispatchToProps)(App);
