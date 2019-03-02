import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './ProductFooter.js';

export class ShoppingCart extends React.Component {
  render() {
    return(
      <div className="bg-info my-1 p-2">
        <i>your shopping-cart:</i><br/><br/>
        <kbd>netto {this.props.newOrder.netto}</kbd><br/>
        <kbd>+ tax {this.props.newOrder.tax}</kbd><br/><br/>
        <b>total: $ {this.props.newOrder.sum}</b>
      </div>
    )
  }
}
export const ShoppingCartRX = connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);
