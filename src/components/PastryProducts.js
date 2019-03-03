import React from 'react';
import pastry_1 from '../content/pastry_1.jpg';
import pastry_2 from '../content/pastry_2.jpg';
import pastry_3 from '../content/pastry_3.jpg';
import { ProductFooterRX } from './ProductFooter.js';

export class PastryProducts extends React.Component {
  render() {
    return(
    <div className="container d-flex justify-content-between">
      <div className="card m-1 p-1">
        <img className="card-img-top rounded" src={pastry_1} alt="X"/>
        <div cat="pastry" className="bg-warning text-center card-body">pastry like your GrandMa did<br/><span>$12 /kg</span></div>
        <ProductFooterRX />
      </div>
      <div className="card m-1 p-1">
        <img className="card-img-top rounded" src={pastry_2} alt="X"/>
        <img className="card-img-top rounded" src={pastry_2} alt="X"/>
        <div cat="pastry" className="bg-warning text-center card-body">pastry like you did it<br/><span>$12 /kg</span></div>
        <ProductFooterRX />
      </div>
      <div className="card m-1 p-1">
        <img className="card-img-top rounded" src={pastry_3} alt="X"/>
        <div cat="pastry" className="bg-warning text-center card-body">pastry for your party<br/><span>$12 /kg</span></div>
        <ProductFooterRX />
      </div>
    </div>
      )
  }
}
