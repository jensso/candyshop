import React from 'react';
import candy_1 from '../content/candy_1.jpg';
import candy_2 from '../content/candy_2.jpg';
import candy_3 from '../content/candy_3.jpg';
import { ProductFooter } from './ProductFooter.js'

export class CandyProducts extends React.Component {
  render() {
    return(
    <>
      <div className="card">
        <img className="card-img-top" src={candy_1} alt="X"/>
        <div className="bg-warning card-body">Fruity sweets & fruity Lollipops<br/><span>$8 /kg</span></div>
        <ProductFooter />
    </div>
    <div className="card">
      <img className="card-img-top" src={candy_2} alt="X"/>
        <div className="bg-warning card-body">Juicy sweets & juicy Lollipops<br/><span>$7 /kg</span></div>
        <ProductFooter />
    </div>
    <div className="card">
      <img className="card-img-top" src={candy_3} alt="X"/>
      <div className="bg-warning card-body">Funny sweets with lovely Messages<br/><span>$7 /kg</span></div>
      <ProductFooter />
    </div>
</>
    )
  }
}
