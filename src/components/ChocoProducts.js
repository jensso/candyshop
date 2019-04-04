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
    <div className="container-fluid d-flex justify-content-around" key={index}>
      <div className="card m-1 p-1">
        <img className="card-img-top img-fluid" src={obj.pic} style={{height: '200px'}} alt="X"/>
        <h5 className="bg-warning m-0 p-2">{obj.type}</h5>
        <div className="bg-warning card-body card-text">{obj.description}<hr /></div>
        <span className="bg-warning text-right p-2"><b>$ {obj.price.toFixed(2)}</b></span>
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
