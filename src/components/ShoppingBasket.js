import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './ProductFooter.js';

class ShoppingBasket extends React.Component {
  render() {
    return(
      <div className="container bg-info my-1 p-2">
        <i>your Products:</i><br/>
        <ul className="text-right">
        </ul>
        <button onClick={this.props.remove} className="btn btn-sm bg-secondary text-light mx-1 p-1">change order</button>
      </div>
    )

  }
}
export const ShoppingBasketRX = connect(mapStateToProps,mapDispatchToProps)(ShoppingBasket);
