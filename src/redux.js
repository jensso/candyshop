import {createStore} from 'redux';

const initialState = {amount: 1,
                      price: 12,
                      sum: 0,
                      netto: 0,
                      product: {},
                      basket: []};
const reducer = (state=initialState, action)=> {
  const copyOfState = {...state};
console.log(copyOfState);

  switch(action.type) {
    case '+':
    copyOfState.amount = state.amount +1;
    return copyOfState;

    case '-':
    copyOfState.amount = state.amount -1;
    return copyOfState;

    case 'BUY':
    copyOfState.sum = (state.amount*state.price);
    copyOfState.netto = Math.round(state.sum/1.19);
    copyOfState.basket= [...copyOfState.basket, copyOfState.product];
    return copyOfState;

    default:
    return state;
  }
}

export var addItem = (ev)=> {
  return {
    type: '+',
    event: ev
  }
}
export var lessItem = (ev)=> {
  return {
    type: '-',
    event: ev
  }
}
export var buyIt =()=> {
  return {
    type: 'BUY'
  }
}

export const store = createStore(reducer);
