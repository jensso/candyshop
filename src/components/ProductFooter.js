import React from 'react';
import {  NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { remove, submit, redir, transmit, plus ,minus, changeInput } from '.././redux.js';

class ProductFooter extends React.Component {

  render() {
    return(
      <div className="card-footer bg-warning">
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
    val0: state.val[0],
    val1: state.val[1],
    val2: state.val[2],
    orders: state.orders,
    clicked: state.clicked,
    submitted: state.submitted,
    newOrder: state.newOrder
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
