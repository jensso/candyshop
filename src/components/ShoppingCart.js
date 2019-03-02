import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './ProductFooter.js';

export class ShoppingCart extends React.Component {
  render() {
    return(
      <div className="bg-info p-2">
        your shopping-cart:<br/>
        {this.props.amount}x Sweets<br/>
        netto {this.props.newOrder.netto}<br/>
        + tax {this.props.newOrder.tax}<br/>
        <b>total: {this.props.newOrder.sum}</b>
      </div>

    )
  }
}
export const ShoppingCartRX = connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);
