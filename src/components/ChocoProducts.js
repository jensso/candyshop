import React from 'react';
import choco_1 from '../content/choco_1.jpg';
import choco_2 from '../content/choco_2.jpg';
import choco_3 from '../content/choco_3.jpg';

import { ProductFooter } from './ProductFooter';
export class ChocoProducts extends React.Component {
  render() {
    return(
    <>
      <div className="card">
        <img className="card-img-top" src={choco_1} alt="X"/>
        <div className="bg-warning card-body">chocolade in different colors<br/><span>$11 /kg</span></div>
        <ProductFooter />
      </div>
      <div className="card">
        <img className="card-img-top" src={choco_2} alt="X"/>
        <div className="bg-warning card-body">chocolate for the heart<br/><span>$12 /kg</span></div>
        <ProductFooter />
      </div>
      <div className="card">
        <img className="card-img-top" src={choco_3} alt="X"/>
        <div className="bg-warning card-body">chocolade from all over the world<br/><span>$8 /kg</span></div>
        <ProductFooter />
      </div>
    </>
    )
  }
}
