import React from 'react';
import { Route } from 'react-router-dom';
import { PastryProducts } from './PastryProducts.js'
export class Pastrys extends React.Component {
  render() {

    return(
      <>
      <div className="container">
        <Route path="/pastrys/products" render={()=> <PastryProducts />}/>
      </div>
      </>
    )
  }
}
