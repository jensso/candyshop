import {createStore} from 'redux';

const initialState = {menge: 0};

const reducer(state=initialState, action)=> {
  const copyOfState = {...state};

  switch(action.type) {
    case '+':
    copyOfState.menge = copyOfState.menge +1;
    return copyOfState;

    case '-':
    copyOfState.menge = copyOfState.menge -1;
    return copyOfState;
    default:
    return state;
  }
}
