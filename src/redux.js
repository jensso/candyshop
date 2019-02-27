import {createStore} from 'redux';

const initialState = {amount: 0,
                      price: 0,
                      sum: 0,
                      basket: []};
const reducer = (state=initialState, action)=> {
  const copyOfState = {...state};

  switch(action.type) {
    case '+':
    copyOfState.amount = copyOfState.amount +1;
    return copyOfState;

    case '-':
    copyOfState.amount = copyOfState.amount -1;
    return copyOfState;

    case 'chocWorld':
    copyOfState.sum = copyOfState.sum+8;
    return copyOfState;

    case 'PASTRY':
    copyOfState.sum = copyOfState.sum+12;
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
export var buyPastry =()=> {
  return {
    type: 'PASTRY'
  }
}
export const store = createStore(reducer);
