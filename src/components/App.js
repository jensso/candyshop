import React from 'react';
// import './App.css';
import { BrowserRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom';
import { Candys } from './Candys.js';
import { Chocolades } from './Chocolades.js';
import { Pastrys } from './Pastrys.js';
import { Home } from './Home.js';


export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
        <Route path='/' render={()=><h3 className="title bg-success text-light mx-2 p-2">welcome to the candyshop</h3>}/>
        <Route exact path='/' render={()=> <Home />}/>
        <Switch>
          <Route path='/candys' render={()=> <Candys />}/>
          <Route path='/chocolades' render={()=> <Chocolades />}/>
          <Route path='/pastrys' render={()=> <Pastrys />}/>
        </Switch>
        </>
      </BrowserRouter>
    )
  }
}
