import React from 'react';
import {  NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { remove, submit, redir, transmit, changeInput } from '.././redux.js';

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
    total: state.total,
    val0: state.val[0],
    val1: state.val[1],
    val2: state.val[2],
    newOrder: state.newOrder,
    clicked: state.clicked,
    submitted: state.submitted
  }
}
export const mapDispatchToProps = (dispatch)=> {
  return {
        transmit: (ev)=> dispatch(transmit(ev)),
        remove: (ev)=> dispatch(remove(ev)),
        submit: (ev)=> dispatch(submit(ev)),
        redir: (ev)=> dispatch(redir(ev)),
        changeInput: (ev)=> dispatch(changeInput(ev))
  }
}
export const ProductFooterRX = connect(mapStateToProps, mapDispatchToProps)(ProductFooter);
