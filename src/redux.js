import {createStore} from 'redux';

const initialState = {
                      basket: [],
                      cart: [],
                      clicked: false,
                      submitted: false,
                      orders: {sum:0,netto:0,tax:0},
                      };
const reducer = (state=initialState, action)=> {
  const copyOfState = {...state};

  switch(action.type) {


    case 'ADD':
    return copyOfState;

    case 'DEC':
    return copyOfState;

    case 'INPUT':
    console.log(action.event.currentTarget);
    return copyOfState;

    case 'BUY':
    console.log(this.props.basket);
    return copyOfState;

      case 'RMV' :
      return copyOfState;

      case 'SUBMIT':
      copyOfState.submitted = !copyOfState.submitted;
      copyOfState.orders= {sum:0,netto:0,tax:0};
      return copyOfState;

      case 'REDIR':
      copyOfState.submitted = !copyOfState.submitted;
      return copyOfState;

      default:
      return state;
  }
}
export let transmit = (ev)=> {
    return {
    type: 'BUY',
    event: ev,
  }
}
export let changeInput = (ev)=> {
  return {
    type: 'INPUT',
    event: ev
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
  }
}
export let minus = (ev)=> {
  return {
    type: 'DEC',
    event: ev,
    target: ev.target.parentElement.previousSibling.getAttribute('cat'),
    value: Number(ev.currentTarget.previousSibling.innerText),
  }
}

export const store = createStore(reducer);
