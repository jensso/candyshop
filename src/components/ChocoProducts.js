import React from 'react';
import choco_1 from '../content/choco_1.jpg';
import choco_2 from '../content/choco_2.jpg';
import choco_3 from '../content/choco_3.jpg';

import { ProductFooterRX } from './ProductFooter';
export class ChocoProducts extends React.Component {
  render() {
    return(
    <div className="container d-flex justify-content-around">
      <div className="card m-1 p-1">
        <img className="card-img-top" src={choco_1} alt="X"/>
        <div cat="choco" className="bg-warning card-body">chocolade in different colors<br/><span>$9.50 /kg</span></div>
        <ProductFooterRX />
      </div>
      <div className="card m-1 p-1">
        <img className="card-img-top" src={choco_2} alt="X"/>
        <div cat="choco" className="bg-warning card-body">chocolate for the heart<br/><span>$9.50 /kg</span></div>
        <ProductFooterRX />
      </div>
      <div className="card m-1 p-1">
        <img className="card-img-top" src={choco_3} alt="X"/>
        <div cat="choco" className="bg-warning card-body">chocolade from all over the world<br/><span>$9.50 /kg</span></div>
        <ProductFooterRX />
      </div>
    </div>
    )
  }
}
