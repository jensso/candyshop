import React from 'react';
import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './ProductFooter.js';
import { ProductFooterRX } from './ProductFooter.js';
import { products } from '../content/data.js';

class ChocoProducts extends React.Component {
  render() {
    return (
    products.choco.map((obj, index)=> {
    return (
    <div className="container-fluid d-flex justify-content-around"  key={index}>
      <div className="card m-1 p-1">
        <img className="card-img-top img-rounded" src={obj.pic} alt="X"/>
      <div className="bg-warning card-body">{obj.description}<br/><span>$ {obj.price.toFixed(2)}</span></div>
        <input cat={obj.type} ident={index} type="number" min="0" onChange={this.props.changeInput} value={this.props['val'+index]} className="form-control mx-auto text-center bg-secondary text-light"></input>
        <button array="choco" ident={index} onClick={this.props.transmit} className="m-1 btn btn-success btn-sm">add to cart</button>
        <ProductFooterRX />
      </div>
    </div>
        )
      })
    )
  }
}


export const ChocoProductsRX = connect(mapStateToProps, mapDispatchToProps)(ChocoProducts);
