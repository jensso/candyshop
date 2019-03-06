import React from 'react';
import { Route } from 'react-router-dom';
import { ChocoProductsRX } from './ChocoProducts.js';

export class Chocolades extends React.Component {
  render() {

    return(
      <>
      <div className="container d-flex flex-direction-column">
        <Route  path="/chocolades/products" render={()=> <ChocoProductsRX />}/>
      </div>
      </>
    )
  }
}
