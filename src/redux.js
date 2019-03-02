import {createStore} from 'redux';


const initialState = {counter: 0,
                      basket: [],
                      cart: [],
                      orders: [],
                      newOrder: {sum:0,tax:0,netto:0},
                      choco: {type: 'choco', amount:0, price: 9.50, sum:0},
                      pastry: {type: 'pastry', amount:0, price:12, sum:0},
                      candy: {type: 'candy', amount: 0, price: 8,sum:0},
                      };
const reducer = (state=initialState, action)=> {
  const copyOfState = {...state};

  switch(action.type) {

    case 'ADD':
    copyOfState.counter = copyOfState.counter+1;
    return copyOfState;

    case 'DEC':
    if (copyOfState.counter > 0) {
    copyOfState.counter = copyOfState.counter-1;
    return copyOfState;
    }
    else {
      return copyOfState;
    }

    case 'BUY':
      if (action.target === 'choco') {
      copyOfState.choco.amount = state.choco.amount + action.value;
      copyOfState.choco.sum = (state.choco.amount * state.choco.price).toFixed(2);

        if (copyOfState.counter > 0) {
        copyOfState.basket = [...copyOfState.basket, state.choco];
        copyOfState.counter = 0;
        }
        if (0===0) {
          console.log(copyOfState);
          copyOfState.newOrder.sum = copyOfState.basket.reduce((total, obj)=> {return total + obj.sum},0);
          copyOfState.newOrder.netto = (copyOfState.newOrder.sum / 1.19).toFixed(2);
          copyOfState.newOrder.tax = (copyOfState.newOrder.sum - copyOfState.newOrder.netto).toFixed(2);
        }

      return copyOfState;
      }
      if (action.target === 'pastry') {
      copyOfState.pastry.amount = state.pastry.amount + action.value;
      copyOfState.pastry.sum = (state.pastry.amount * state.pastry.price).toFixed(2);

        if (copyOfState.counter > 0) {
        copyOfState.basket = [...state.basket, state.pastry];
        copyOfState.counter = 0;
        }
        if (0===0) {
          console.log(copyOfState);
          copyOfState.newOrder.sum = copyOfState.basket.reduce((total, obj)=> {return total + obj.sum},0);
          copyOfState.newOrder.netto = (copyOfState.newOrder.sum / 1.19).toFixed(2);
          copyOfState.newOrder.tax = (copyOfState.newOrder.sum - copyOfState.newOrder.netto).toFixed(2);
        }

      return copyOfState;
      }
      if (action.target === 'candy') {
      copyOfState.candy.amount = state.candy.amount + action.value;
      copyOfState.candy.sum = (state.candy.amount * state.candy.price).toFixed(2);

        if (copyOfState.counter > 0) {
        copyOfState.basket = [...state.basket, state.candy];
        copyOfState.counter = 0;
        }
        if (0===0) {
          console.log(copyOfState);
          copyOfState.newOrder.sum = copyOfState.basket.reduce((total, obj)=> {return total + obj.sum},0);
          copyOfState.newOrder.netto = (copyOfState.newOrder.sum / 1.19).toFixed(2);
          copyOfState.newOrder.tax = (copyOfState.newOrder.sum - copyOfState.newOrder.netto).toFixed(2);
        }

      return copyOfState;
      }

      break;

      default:
      return state;
  }
}
export let transmit = (ev)=> {
  let val = document.getElementById("123").innerText;
  let valAsNum = parseInt(val);

  return {
    type: 'BUY',
    event: ev,
    target: ev.target.parentElement.previousSibling.getAttribute('cat'),
    value: valAsNum
  }
}
export let plus = (ev)=> {
  return {
    type: 'ADD',
    event: ev,
  }
}
export let minus = (ev)=> {
  return {
    type: 'DEC',
    event: ev
  }
}

export const store = createStore(reducer);
