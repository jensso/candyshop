import React from 'react';
import {  NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {submit, transmit, plus ,minus, remove, redir} from '.././redux.js';

class ProductFooter extends React.Component {

  render() {
    return(
      <div className="card-footer text-center bg-warning">
        <button onClick={this.props.decItem} className="btn badge bg-secondary text-light p-2 m-1"><b>-</b></button>
        <p id="123" className="badge badge-pill mx-auto p-2 lead bg-dark text-light">{this.props.counter}</p>
        <button onClick={this.props.addItem} className="btn badge bg-secondary text-light p-2 m-1"><b>+</b></button><br/>
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
    choco: state.choco,
    pastry: state.pastry,
    candy: state.candy,
    clicked: state.clicked,
    submitted: state.submitted
  }
}
export const mapDispatchToProps = (dispatch)=> {
  return {
        transmit: (ev)=> dispatch(transmit(ev)),
        addItem: (ev)=> dispatch(plus(ev)),
        decItem: (ev)=> dispatch(minus(ev)),
        remove: (ev)=> dispatch(remove(ev)),
        submit: (ev)=> dispatch(submit(ev)),
          redir: (ev)=> dispatch(redir(ev))
  }
}
export const ProductFooterRX = connect(mapStateToProps, mapDispatchToProps)(ProductFooter);
