import React from 'react';
import { NavLink } from 'react-router-dom';

export class MoreInfo extends React.Component {
  render() {
    return(
      <div className="jumbotron bg-info m-2 p-2">
        <p className="lead text-light">more info about this product...blablabla</p>
        <NavLink to='/'className="text-secondary">home</NavLink>

      </div>
    )
  }
}
