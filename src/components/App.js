import React from 'react';
// import './App.css';
import { BrowserRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom';
import { Candys } from './Candys.js';
import { Chocolades } from './Chocolades.js';
import { Pastrys } from './Pastrys.js';
import { Home } from './Home.js';
import { NavBasket } from './NavBasket.js';
import { MoreInfo } from './MoreInfo.js';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
        <Route path='/' render={()=> <NavBasket />}/>
        <Route exact path='/' render={()=> <Home />}/>
        <Switch>
          <Route path='/more' render={()=> <MoreInfo />}/>
          <Route path='/candys' render={()=> <Candys />}/>
          <Route path='/chocolades' render={()=> <Chocolades />}/>
          <Route path='/pastrys' render={()=> <Pastrys />}/>
        </Switch>
        </>
      </BrowserRouter>
    )
  }
}
