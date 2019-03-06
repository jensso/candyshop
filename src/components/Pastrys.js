import React from 'react';
import { Route } from 'react-router-dom';
import { PastryProductsRX } from './PastryProducts.js'
export class Pastrys extends React.Component {
  render() {

    return(
      <>
      <div className="container d-flex flex-direction-column">
        <Route path="/pastrys/products" render={()=> <PastryProductsRX />}/>
      </div>
      </>
    )
  }
}
