import React from 'react';
import { Route } from 'react-router-dom';
import { CandyProducts } from './CandyProducts';

export class Candys extends React.Component {
  render() {

    return(
      <>
      <div className="container-fluid d-flex">
        <Route  path="/candys/products" render={()=> <CandyProducts />}/>
      </div>
      </>
    )
  }
}
