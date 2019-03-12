import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './ProductFooter.js';

class ShoppingBasket extends React.Component {
  render() {
    return(
      <>
      <div className="container bg-info my-1 p-2">
        <i>your Products:</i><br/>
        <ul className="list-group text-right">
        {this.props.basket.map((obj, index)=>{
          return <li className="list-group-item" key={index}>{obj.amount}x {obj.type} for {obj.price.toFixed(2)} <br />
          <i>={obj.sum.toFixed(2)}</i>
          </li>
        })}
        </ul>
      </div>
      </>
    )
  }
}
export const ShoppingBasketRX = connect(mapStateToProps,mapDispatchToProps)(ShoppingBasket);
