import React from 'react';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './ProductFooter.js';


class RemoveOrder extends React.Component {
  render() {
    return(
      <div className="container bg-danger my-1 p-2">
        <i>your Products:</i><br/>
        <ul className="list-group text-right">
        {this.props.basket.map((obj, index)=>{
          return <li className="list-group-item bg-light" key={index}>{obj.amount}x {obj.type} for {obj.price.toFixed(2)}
          <button>delete</button><button>change</button></li>
        })}
        </ul>
      </div>
    )
  }
}
export const RemoveOrderRX = connect(mapStateToProps, mapDispatchToProps)(RemoveOrder);
