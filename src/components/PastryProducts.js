import React from 'react';
import pastry_1 from '../content/pastry_1.jpg';
import pastry_2 from '../content/pastry_2.jpg';
import pastry_3 from '../content/pastry_3.jpg';
import { ProductFooter } from './ProductFooter';

export class PastryProducts extends React.Component {
  render() {
    return(
    <>
      <div className="card">
        <img className="card-img-top" src={pastry_1} alt="X"/>
        <div className="bg-warning card-body">pastry like your GrandMa did<br/><span>$12 /kg</span></div>
        <ProductFooter />
      </div>
      <div className="card">
        <img className="card-img-top" src={pastry_2} alt="X"/>
        <div className="bg-warning card-body">pastry like you did it<br/><span>$12 /kg</span></div>
        <ProductFooter />
      </div>
      <div className="card">
        <img className="card-img-top" src={pastry_3} alt="X"/>
        <div className="bg-warning card-body">pastry like your GrandMa did<br/><span>$12 /kg</span></div>
        <ProductFooter />
      </div>
    </>
      )
  }
}
