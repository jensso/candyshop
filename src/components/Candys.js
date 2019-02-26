import React from 'react';
import { BrowserRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom';


export class Candys extends React.Component {
  render() {

    return(
      <>
      <div className="container">
        <Route  path="/candys" render={()=> <p>select bonbons here</p>}/>
        <Route path="/candys" render={()=> <p>select liquores here</p>}/>
        <Route path="/candys" render={()=> <p>select pralines here</p>}/>
      </div>
      </>
    )
  }
}
