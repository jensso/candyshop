import {createStore} from 'redux';

const initialState = {amount: 0,
                      counter: 0,
                      price: 12,
                      basket: [],
                      newOrder: {sum:0,tax:0,netto:0}
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
    copyOfState.counter = 0;
    copyOfState.newOrder.sum = (copyOfState.amount*copyOfState.price).toFixed(2);
    copyOfState.newOrder.netto = (copyOfState.newOrder.sum / 1.19).toFixed(2);
    copyOfState.newOrder.tax = (copyOfState.newOrder.sum-copyOfState.newOrder.netto).toFixed(2);
    copyOfState.basket = [...state.basket, {...state.newOrder}];
    console.log(copyOfState);

    return copyOfState;

    default:
    return state;
  }
}

export var transmit =(ev)=> {
  return {
    type: 'BUY',
    event: ev
  }
}
export var plus = (ev)=> {
  return {
    type: 'ADD',
    event: ev
  }
}
export var minus = (ev)=> {
  return {
    type: 'DEC',
    event: ev
  }
}

export const store = createStore(reducer);
