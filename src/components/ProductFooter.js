import React from 'react';
import {  NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {buyIt, lessItem, addItem} from '.././redux.js';

class ProductFooter extends React.Component {
  render() {
    return(
      <div className="card-footer bg-warning">
        <span onClick={this.props.minus} className="badge bg-light">-</span>
        <p className="badge lead bg-dark text-light">1</p>
        <span onClick={this.props.plus}className="badge bg-light">+</span><br/>
        <button type="submit" onClick={this.props.buy} className="m-1 btn btn-success btn-sm">add to cart</button>
        <NavLink to='/more'className="text-light">
        <button className="m-1 btn btn-info btn-sm">learn more</button>
        </NavLink>
      </div>
    )
  }
}
const mapStateToProps = (state)=> {
  return {
    basket: state.basket,
    amount: state.amount

  }
}
const mapDispatchToProps = (dispatch)=> {
  return {
    buy: ()=> dispatch(buyIt()),
    minus: ()=> dispatch(lessItem()),
    plus: ()=> dispatch(addItem()),
  }
}

export const ProductFooterRX = connect(0, mapDispatchToProps)(ProductFooter);
