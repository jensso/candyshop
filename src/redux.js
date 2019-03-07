import {createStore} from 'redux';
import { choco, candy,pastry } from './content/data.js';

const initialState = {
                      basket: [],
                      val: [0,0,0],
                      clicked: false,
                      submitted: false,
                      newOrder: {},
                      };
const reducer = (state=initialState, action)=> {
  const copyOfState = {...state};

  switch(action.type) {

    case 'ADD':
    copyOfState.val[action.targetID] = state.val[action.targetID] + 1;
    return copyOfState;

    case 'DEC':
    if (copyOfState.val[action.targetID] !==0) {
      copyOfState.val[action.targetID] -= 1;
      return copyOfState;
    }
    else {
      return copyOfState;
    }

    case 'INPUT':
    copyOfState.val[action.targetID] = action.value;
    return copyOfState;

    case 'BUY':
    console.log(copyOfState);
   let isIncluded = choco.find((obj)=> {return obj.type=== 'choco3'});
   console.log(isIncluded);
    console.log(choco[action.targetID].type);
    copyOfState.basket = [...copyOfState.basket, copyOfState.newOrder];
    console.log(copyOfState.basket);
    return copyOfState;

      case 'RMV' :
      return copyOfState;

      case 'SUBMIT':
      copyOfState.submitted = !copyOfState.submitted;
      copyOfState.newOrder= {};
      return copyOfState;

      case 'REDIR':
      return copyOfState;

      default:
      return state;
  }
}
export let transmit = (ev)=> {
    return {
    type: 'BUY',
    event: ev,
    targetID:ev.target.getAttribute('ident'),

  }
}
export let changeInput = (ev)=> {
  console.log(ev.target.value);
  return {
    type: 'INPUT',
    event: ev,
    targetID:ev.target.getAttribute('ident'),
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
  setTimeout(()=> {
    return {
      type: 'REDIR',
      event: ev
    }
  },5000)
}
export let plus = (ev)=> {
  let val = ev.target.nextSibling.value;
  return {
    type: 'ADD',
    event: ev,
    value: ev.target.nextSibling.value,
    target: ev.target.nextSibling,
    targetID: ev.target.nextSibling.getAttribute('ident')
  }
}
export let minus = (ev)=> {
  return {
    type: 'DEC',
    event: ev,
    value: ev.target.previousSibling.value,
    target: ev.target.previousSibling,
    targetID: ev.target.previousSibling.getAttribute('ident')
  }
}

export const store = createStore(reducer);
