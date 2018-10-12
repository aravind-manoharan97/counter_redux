import React from 'react';
import { connect } from 'react-redux';

class Counter extends React.Component {

  state = { count: 0 }

  increment = () => {
    console.log('clicked')
    this.props.dispatch({ type: 'INCREMENT' });
  }

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  }

  componentWillMount = () => {
    console.log('mounts component')
  }

  
  render() {
    console.log('this.props');
    return (
      <div>
        <h2>Counter</h2>
        <div>
          <button onClick={this.decrement}>-</button>
          <span>{this.props.count}</span>
          <button onClick={this.increment}>+</button>
        </div>
      </div>
    )
  }
}



function mapStateToProps(state) {
  console.log('map');
  return {
    count: state.count
  };
}

export default connect(mapStateToProps)(Counter);