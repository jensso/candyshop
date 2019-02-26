import React from 'react';
import { BrowserRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom';

export class Chocolades extends React.Component {
  render() {

    return(
      <>
      <div className="container">
        <Route  path="/chocolades" render={()=> <p>select danish choco</p>}/>
        <Route path="/chocolades" render={()=> <p>select english choco</p>}/>
        <Route path="/chocolades" render={()=> <p>select swiss choco</p>}/>
      </div>
      </>
    )
  }
}
