import {createStore} from 'redux';

const initialState = {amount: 0,
                      counter: 0,
                      price: 12,
                      basket: [],
                      cart: [],
                      newOrder: {sum:0,tax:0,netto:0},
                      choco: {type: 'choco', amount:0, price: 9.50},
                      pastry: {type: 'pastry', amount:0, price:12},
                      candy: {type: 'candy', amount: 0, price: 8},
                      };
const reducer = (state=initialState, action)=> {
  const copyOfState = {...state};

  switch(action.type) {

    case 'ADD':
    copyOfState.counter = copyOfState.counter+1;
    copyOfState.amount = copyOfState.amount+1;
    return copyOfState;

    case 'DEC':
    if (copyOfState.counter > 0) {
    copyOfState.counter = copyOfState.counter-1;
    copyOfState.amount = copyOfState.amount-1;
    return copyOfState;
    }
    else {
      return copyOfState;
    }

    case 'BUY':
      if (action.target === 'choco') {
      copyOfState.choco.amount = copyOfState.counter;
      copyOfState.newOrder.sum = (copyOfState.choco.amount*copyOfState.choco.price).toFixed(2);
      copyOfState.newOrder.netto = (copyOfState.newOrder.sum / 1.19).toFixed(2);
      copyOfState.newOrder.tax = (copyOfState.newOrder.sum-copyOfState.newOrder.netto).toFixed(2);
      if (copyOfState.counter > 0) {
      copyOfState.cart = [...state.cart, {...state.newOrder}];
      copyOfState.basket = [...state.basket, state.choco];
      copyOfState.counter = 0;
      }
      return copyOfState;
      }
      if (action.target === 'pastry') {
      copyOfState.pastry.amount = copyOfState.counter;
      copyOfState.newOrder.sum = (copyOfState.pastry.amount*copyOfState.pastry.price).toFixed(2);
      copyOfState.newOrder.netto = (copyOfState.newOrder.sum / 1.19).toFixed(2);
      copyOfState.newOrder.tax = (copyOfState.newOrder.sum-copyOfState.newOrder.netto).toFixed(2);
      copyOfState.cart = [...state.cart, {...state.newOrder}];
      if (copyOfState.counter > 0) {
      copyOfState.basket = [...state.basket, state.pastry];
      copyOfState.counter = 0;
      }
      return copyOfState;
      }
      if (action.target === 'candy') {
      copyOfState.candy.amount = copyOfState.counter;
      copyOfState.newOrder.sum = (copyOfState.candy.amount*copyOfState.candy.price).toFixed(2);
      copyOfState.newOrder.netto = (copyOfState.newOrder.sum / 1.19).toFixed(2);
      copyOfState.newOrder.tax = (copyOfState.newOrder.sum-copyOfState.newOrder.netto).toFixed(2);
      if (copyOfState.counter > 0) {
      copyOfState.cart = [...state.cart, {...state.newOrder}];
      copyOfState.basket = [...state.basket, state.candy];
      copyOfState.counter = 0;
      }
      return copyOfState;
      }
      break;
      default:
      return state;
  }
}
export let transmit = (ev)=> {
  return {
    type: 'BUY',
    event: ev,
    target: ev.target.parentElement.previousSibling.getAttribute('cat')
  }
}
export let plus = (ev)=> {
  return {
    type: 'ADD',
    event: ev
  }
}
export let minus = (ev)=> {
  return {
    type: 'DEC',
    event: ev
  }
}

export const store = createStore(reducer);
