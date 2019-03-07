import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './ProductFooter.js';

class ShoppingCart extends React.Component {
  render() {
    return(
      <div className="container bg-info my-1 p-2">
        <i>your shopping-cart:</i><br/><br/>
        <kbd>netto </kbd><br/>
        <kbd>+ tax </kbd><br/><br/>
        <b>total: $ </b>
        <button onClick={this.props.submit} className="btn btn-sm bg-secondary text-light m-1 p-1">submit order</button>
      </div>
    )
  }
}
export const ShoppingCartRX = connect(mapStateToProps,mapDispatchToProps)(ShoppingCart);
