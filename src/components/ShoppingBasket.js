import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './ProductFooter.js';

class ShoppingBasket extends React.Component {
  render() {
    return(
      <div className="bg-info my-1 p-2">
        <i>your Products:</i><br/>
        <ul className="text-right">
        {this.props.choco.amount!==0 && <li>{this.props.choco.amount}x {this.props.choco.type} per {(this.props.choco.price).toFixed(2)}</li>}
        {this.props.candy.amount!==0 && <li>{this.props.candy.amount}x {this.props.candy.type} per {(this.props.candy.price).toFixed(2)}</li>}
        {this.props.pastry.amount!==0 && <li>{this.props.pastry.amount}x {this.props.pastry.type} per {(this.props.pastry.price).toFixed(2)}</li>}
        </ul>
      </div>
    )

  }
}
export const ShoppingBasketRX = connect(mapStateToProps,mapDispatchToProps)(ShoppingBasket);
