import React from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './ProductFooter.js';
import {submit} from '.././redux.js';

class SubmitArea extends React.Component {
  componentDidMount() {
  
  }

  render() {
      return (
        <div className="jumbotron p-4 bg-danger text-light">
          <p className="display-2">Thank you for your Order!</p>
          <p>the total cost of your order is ....undefined</p>
          <p>see you soon, in 5 sec you will be directed to the homepage</p>
        </div>
      )
  }
}
export const SubmitAreaRX = connect(mapStateToProps, mapDispatchToProps)(SubmitArea);
