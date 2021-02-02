import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';

const initialState = {
  count: 0
};

function reducer( state = initialState, action) {
  switch(action.type) {
    case 'INCREMENT':
      return { count: state.count + action.num };
    case 'DECREASE':
      return { count: state.count - action.num }
    default:
      return state;
  }
}

const store = createStore(reducer);

const el = <Provider store={store}>
            <Counter/>
          </Provider>


ReactDOM.render(
  el,
  document.getElementById('root')
)
