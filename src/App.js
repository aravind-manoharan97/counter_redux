import React, { Component } from 'react';
import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import './App.css';

const initialState = {
  count: 0
};

function reducer(state = initialState, action) {
  console.log('reducer')
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    default:
      return state;
  }

}

const store = createStore(reducer);

store.subscribe(() =>
  console.log('subs')
)

class App extends Component {

  componentWillMount = () => {
    console.log('mounts')
  }

  render() {
    return (
      <Provider store={store}>
        <Counter />
      </Provider>
    );
  }
}



export default App;
