import React from 'react';
// import './App.css';
import { BrowserRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom';

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <>
        <Route  path='/' render={()=> <p className="bg-dark text-light m-2 p-2">welcome to the candyshop</p>}/>
        <Switch>
          <Route path='/candys' render={()=> <p>category of candys</p>}/>
          <Route path='/chocolades' render={()=> <p>category of chocolades</p>}/>
          <Route path='/pastrys' render={()=> <p>category of pastrys</p>}/>
        </Switch>
        </>
      </BrowserRouter>
    )
  }
}
