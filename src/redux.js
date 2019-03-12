import {createStore} from 'redux';
import { products } from './content/data.js';

const initialState = {
                      basket: [],
                      total: 0,
                      val: [0,0,0],
                      newOrder: {},
                      clicked: false,
                      submitted: false,
                      };
const reducer = (state=initialState, action)=> {
  const copyOfState = {...state};

  switch(action.type) {

    case 'INPUT':
    copyOfState.val[action.targetID] = action.value;
    return copyOfState;

    case 'BUY':
    if (copyOfState.val[action.targetID] !==0) {
      let included = Boolean(copyOfState.basket.find((obj)=>obj.type===action.target));
      let arr = action.event.target.getAttribute('array');
      if (!included) {
        if (arr ==='choco') {
          copyOfState.newOrder = products.choco[action.targetID];
          copyOfState.newOrder.amount = copyOfState.val[action.targetID];
          copyOfState.newOrder.sum = copyOfState.newOrder.amount * copyOfState.newOrder.price;

          copyOfState.basket = [...state.basket, copyOfState.newOrder];
          copyOfState.total = copyOfState.basket.reduce((total, order)=> {return total+order.sum},0).toFixed(2);
          copyOfState.val[action.targetID] = 0;
          return copyOfState;
        }
        if (arr ==='candy') {
          copyOfState.newOrder = products.candy[action.targetID];
          copyOfState.newOrder.amount = copyOfState.val[action.targetID];
          copyOfState.newOrder.sum = copyOfState.newOrder.amount * copyOfState.newOrder.price;

          copyOfState.basket = [...state.basket, copyOfState.newOrder];
          copyOfState.total = copyOfState.basket.reduce((total, order)=> {return total+order.sum},0).toFixed(2);
          copyOfState.val[action.targetID] = 0;
          return copyOfState;
        }
        if (arr ==='pastry') {
          copyOfState.newOrder = products.pastry[action.targetID];
          copyOfState.newOrder.amount = copyOfState.val[action.targetID];
          copyOfState.newOrder.sum = copyOfState.newOrder.amount * copyOfState.newOrder.price;

          copyOfState.basket = [...state.basket, copyOfState.newOrder];
          copyOfState.total = copyOfState.basket.reduce((total, order)=> {return total+order.sum},0).toFixed(2);
          copyOfState.val[action.targetID] = 0;
          return copyOfState;
        }
      }
      if (included) {
        if (arr === 'choco') {
          copyOfState.newOrder = products.choco[action.targetID];
          copyOfState.newOrder.amount = copyOfState.val[action.targetID];
          copyOfState.newOrder.sum = copyOfState.newOrder.amount * copyOfState.newOrder.price;

          copyOfState.total = copyOfState.basket.reduce((total, order)=> {return total+order.sum},0).toFixed(2);
          copyOfState.val[action.targetID] = 0;
          return copyOfState;

        }
        if (arr === 'candy') {
          copyOfState.newOrder = products.candy[action.targetID];
          copyOfState.newOrder.amount = copyOfState.val[action.targetID];
          copyOfState.newOrder.sum = copyOfState.newOrder.amount * copyOfState.newOrder.price;

          copyOfState.total = copyOfState.basket.reduce((total, order)=> {return total+order.sum},0).toFixed(2);
          copyOfState.val[action.targetID] = 0;
          return copyOfState;
        }
        if (arr === 'pastry') {
          copyOfState.newOrder = products.pastry[action.targetID];
          copyOfState.newOrder.amount = copyOfState.val[action.targetID];
          copyOfState.newOrder.sum = copyOfState.newOrder.amount * copyOfState.newOrder.price;

          copyOfState.total = copyOfState.basket.reduce((total, order)=> {return total+order.sum},0).toFixed(2);
          copyOfState.val[action.targetID] = 0;
          return copyOfState;
        }
      }
      else {
      return copyOfState;
    }
  }
  break;

      case 'RMV' :
      return copyOfState;

      case 'SUBMIT':
      copyOfState.submitted = true;
      return copyOfState;

      case 'REDIR':
      copyOfState.newOrder= {};
      copyOfState.basket = [];
      copyOfState.total = 0;
      copyOfState.submitted = false;
      return copyOfState;

      default:
      return state;
  }
}
export let transmit = (ev)=> {
    return {
    type: 'BUY',
    event: ev,
    targetID: ev.target.getAttribute('ident'),
    target: ev.target.previousSibling.getAttribute('cat'),
  }
}
export let changeInput = (ev)=> {
  return {
    type: 'INPUT',
    event: ev,
    targetID: ev.target.getAttribute('ident'),
    value: ev.target.value,
  }
}
export let remove = (ev)=> {
  return {
    type: 'RMV',
    event: ev,
  }
}
export let submit = (ev)=> {
  return {
    type: 'SUBMIT',
    event: ev
  }
}
export let redir = (ev)=> {
    return {
      type: 'REDIR',
      event: ev
    }
}

export const store = createStore(reducer);
