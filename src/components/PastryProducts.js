import React from 'react';
import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './ProductFooter.js';
import { ProductFooterRX } from './ProductFooter.js';
import { pastry } from '../content/data.js';

class PastryProducts extends React.Component {
  render() {
    return (
    pastry.map((obj, index)=> {
    return (
    <div className="container d-flex justify-content-around"  key={index}>
      <div className="card m-1 p-1">
        <img className="card-img-top" src={obj.pic} alt="X"/>
      <div className="bg-warning card-body">pastry in various colors<br/><span>$ {obj.price.toFixed(2)}</span></div>
        <button ident={index} onClick={this.props.addItem} className="btn badge bg-secondary text-light p-2 m-1">+</button>
        <input ident={index} type="text" onChange={this.props.changeInput} value={this.props['val'+index]} className="form-control mx-1 p-1 lead bg-light text-succeess"></input>
        <button ident={index} onClick={this.props.decItem} className="btn badge bg-secondary text-light p-2 m-1">-</button>
        <button ident={index} onClick={this.props.transmit} className="m-1 btn btn-success btn-sm">add to cart</button>
        <ProductFooterRX />
      </div>
    </div>
        )
      })
    )
  }
}
export const PastryProductsRX = connect(mapStateToProps, mapDispatchToProps)(PastryProducts);
