import {createStore} from 'redux';

const initialState = {counter: 0,
                      basket: [],
                      cart: [],
                      orders: {sum:0,netto:0,tax:0},
                      choco: {type: 'choco', amount:0, price: 9.50, sum:0},
                      pastry: {type: 'pastry', amount:0, price:12, sum:0},
                      candy: {type: 'candy', amount: 0, price: 8,sum:0},
                      clicked: false,
                      submitted: false,
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

        if (copyOfState.counter > 0) {
          copyOfState.choco.amount = copyOfState.choco.amount + action.value;

        copyOfState.orders.sum =  (copyOfState.choco.amount*copyOfState.choco.price)+
                                  (copyOfState.candy.amount*copyOfState.candy.price)+
                                  (copyOfState.pastry.amount*copyOfState.pastry.price);
                                  copyOfState.orders.netto = (copyOfState.orders.sum / 1.19).toFixed(2);
                                  copyOfState.orders.tax = (copyOfState.orders.sum - copyOfState.orders.netto).toFixed(2);

          copyOfState.cart = [...state.cart, copyOfState.orders];

        copyOfState.basket = [...state.basket, copyOfState.choco];
        copyOfState.counter = 0;
        }
      return copyOfState;
      }
      if (action.target === 'pastry') {

        if (copyOfState.counter > 0) {
          copyOfState.pastry.amount = copyOfState.pastry.amount + action.value;
          copyOfState.orders.sum =  (copyOfState.choco.amount*copyOfState.choco.price)+
                                    (copyOfState.candy.amount*copyOfState.candy.price)+
                                    (copyOfState.pastry.amount*copyOfState.pastry.price);
                                    copyOfState.orders.netto = (copyOfState.orders.sum / 1.19).toFixed(2);
                                    copyOfState.orders.tax = (copyOfState.orders.sum - copyOfState.orders.netto).toFixed(2);

        copyOfState.cart = [...state.cart, copyOfState.orders];
        copyOfState.basket = [...state.basket, copyOfState.pastry];
        copyOfState.counter = 0;
        }
      return copyOfState;
      }
      if (action.target === 'candy') {

        if (copyOfState.counter > 0) {
          copyOfState.candy.amount = copyOfState.candy.amount + action.value;

          copyOfState.orders.sum =  (copyOfState.choco.amount*copyOfState.choco.price)+
                                    (copyOfState.candy.amount*copyOfState.candy.price)+
                                    (copyOfState.pastry.amount*copyOfState.pastry.price);
                                    copyOfState.orders.netto = (copyOfState.orders.sum / 1.19).toFixed(2);
                                    copyOfState.orders.tax = (copyOfState.orders.sum - copyOfState.orders.netto).toFixed(2);

        copyOfState.cart = [...state.cart, copyOfState.orders];
        copyOfState.basket = [...state.basket, copyOfState.candy];
        copyOfState.counter = 0;
        }
      return copyOfState;
      }
      if (0===1) {
      copyOfState.cart = copyOfState.basket;
      copyOfState.orders.sum = copyOfState.cart.reduce((total, obj)=>{ return Number(total) + Number(obj.sum)},0);
      copyOfState.orders.netto = (copyOfState.orders.sum / 1.19).toFixed(2);
      copyOfState.orders.tax = (copyOfState.orders.sum - copyOfState.orders.netto).toFixed(2);
      console.log('orders');
      console.log(copyOfState.orders);
      console.log(state.orders);
      return copyOfState;
    }

      break;
      case 'RMV' :
      copyOfState.orders.amount = copyOfState.orders.amount-1;
      console.log(copyOfState);
      return copyOfState;
      case 'SUBMIT':
      copyOfState.orders= {sum:0,netto:0,tax:0};
      copyOfState.choco= {type: 'choco', amount:0, price: 9.50, sum:0};
      copyOfState.pastry= {type: 'pastry', amount:0, price:12, sum:0};
      copyOfState.candy= {type: 'candy', amount: 0, price: 8,sum:0};
      copyOfState.submitted = !copyOfState.submitted;
      return copyOfState;

      case 'REDIR':
      copyOfState.submitted = !copyOfState.submitted;
      return copyOfState;


      default:
      return state;
  }
}
export let transmit = (ev)=> {

  let val = document.getElementById("123").innerText;
  let valAsNum = Number(val);
  return {
    type: 'BUY',
    event: ev,
    target: ev.target.parentElement.previousSibling.getAttribute('cat'),
    value: valAsNum
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
  setTimeout(()=> {
    return {
      type: 'REDIR',
      event: ev
    }
  },5000)
}
export let plus = (ev)=> {
  return {
    type: 'ADD',
    event: ev,
    target: Number(ev.currentTarget.previousSibling.innerText),
  }
}
export let minus = (ev)=> {
  return {
    type: 'DEC',
    event: ev
  }
}

export const store = createStore(reducer);
