import React from 'react';

export class ProductFooter extends React.Component {
  render() {
    return(
      <div className="card-footer bg-warning">
        <button onClick={this.props.buyPastry} className="m-1 btn btn-success btn-sm">add to cart</button>
        <button className="m-1 btn btn-info btn-sm">learn more</button>
      </div>
    )
  }
}
