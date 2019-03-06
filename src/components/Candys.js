import React from 'react';
import { Route } from 'react-router-dom';
import { CandyProductsRX } from './CandyProducts';

export class Candys extends React.Component {
  render() {

    return(
      <>
      <div className="container d-flex flex-direction-column">
        <Route  path="/candys/products" render={()=> <CandyProductsRX />}/>
      </div>
      </>
    )
  }
}
