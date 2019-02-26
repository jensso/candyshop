import React from 'react';
import { BrowserRouter, NavLink, Route, Redirect, Switch } from 'react-router-dom';

export class Home extends React.Component {
  render() {
    return(
        <>
        <div className="jumbotron bg-dark mx-2">
          <NavLink className="m-2 nav-link lead bg-light" to="/candys">find our Selection of candys</NavLink>
          <NavLink className="m-2 nav-link lead bg-light" to="/pastrys">see our pastrys</NavLink>
          <NavLink className="m-2 nav-link lead bg-light" to="/chocolades">find chocolates from different countrys</NavLink>
        </div>
        </>

    )
  }
}
