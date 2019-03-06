import React from 'react';
import {  NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { remove, submit, redir, transmit, plus ,minus, changeInput } from '.././redux.js';

class ProductFooter extends React.Component {

  render() {
    return(
      <div className="card-footer bg-warning">
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
    basket: state.basket,
    cart: state.cart,
    orders: state.orders,
    clicked: state.clicked,
    submitted: state.submitted,
    orders: state.orders,
  }
}
export const mapDispatchToProps = (dispatch)=> {
  return {
        transmit: (ev)=> dispatch(transmit(ev)),
        addItem: (ev)=> dispatch(plus(ev)),
        decItem: (ev)=> dispatch(minus(ev)),
        remove: (ev)=> dispatch(remove(ev)),
        submit: (ev)=> dispatch(submit(ev)),
          redir: (ev)=> dispatch(redir(ev)),
          changeInput: (ev)=> dispatch(changeInput(ev))
  }
}
export const ProductFooterRX = connect(mapStateToProps, mapDispatchToProps)(ProductFooter);
