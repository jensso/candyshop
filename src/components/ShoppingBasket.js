import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './ProductFooter.js';

class ShoppingBasket extends React.Component {
  render() {
    return(
      <div className="bg-info my-1 p-2">
        <i>your Products:</i><br/>
        <ul>
        {this.props.basket.map((obj, index)=><li key={index}>{obj.amount}x {obj.type} per {(obj.price).toFixed(2)}</li>)}
        </ul>
      </div>
    )

  }
}
export const ShoppingBasketRX = connect(mapStateToProps,mapDispatchToProps)(ShoppingBasket);
