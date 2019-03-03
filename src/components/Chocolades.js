import React from 'react';
import { Route } from 'react-router-dom';
import { ChocoProducts } from './ChocoProducts.js'
export class Chocolades extends React.Component {
  render() {

    return(
      <>
      <div className="container">
        <Route  path="/chocolades/products" render={()=> <ChocoProducts />}/>
      </div>
      </>
    )
  }
}
