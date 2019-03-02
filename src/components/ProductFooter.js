import React from 'react';
import {  NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {transmit, plus ,minus} from '.././redux.js';

class ProductFooter extends React.Component {

  render() {
    return(
      <div className="card-footer bg-warning">
        <button onClick={this.props.decItem} className="btn badge bg-light">-</button>
        <p id="123" className="badge lead bg-dark text-light" value={this.props.counter}>{this.props.counter}</p>
        <button onClick={this.props.addItem} className="btn badge bg-light">+</button><br/>
        <button onClick={this.props.transmit} className="m-1 btn btn-success btn-sm">add to cart</button>
        <NavLink to='/more'className="text-light">
        <button className="m-1 btn btn-info btn-sm">learn more</button>
        </NavLink>
      </div>
    )
  }
}

export const mapStateToProps = (state)=> {
  return {
    counter: state.counter,
    basket: state.basket,
    cart: state.cart,
    orders: state.orders,
    newOrder: state.newOrder,
    choco: state.choco,
    pastry: state.pastry,
    candy: state.candy
  }
}
export const mapDispatchToProps = (dispatch)=> {
  return {
        transmit: (ev)=> dispatch(transmit(ev)),
        addItem: (ev)=> dispatch(plus(ev)),
        decItem: (ev)=> dispatch(minus(ev))
  }
}
export const ProductFooterRX = connect(mapStateToProps, mapDispatchToProps)(ProductFooter);
