import React from 'react';
import { BrowserRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom';

export class Pastrys extends React.Component {
  render() {

    return(
      <>
      <div className="container">
        <Route path="/pastrys" render={()=> <p>select sweet pastrys</p>}/>
        <Route path="/pastrys" render={()=> <p>select sweeter pastrys</p>}/>
        <Route path="/pastrys" render={()=> <p>select sweetest pastrys</p>}/>
      </div>
      </>
    )
  }
}
