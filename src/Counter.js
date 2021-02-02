import React from 'react';
import { connect } from 'react-redux';

// Action
function incrementCounter(num) {
  return {
    type: 'INCREMENT',
    num: num
  }
}

function decreaseCounter(num) {
  return {
    type: 'DECREASE',
    num: num
  }
}

function Counter(props) {

  function incrementClick() {
    props.incrementCounter(1);
  }

  function decreaseClick() {
    props.decreaseCounter(3);
  }
  return <div>
    <p>{props.count}</p>
    <button onClick={incrementClick}>Increment</button>
    <button onClick={decreaseClick}>Decrease</button>
  </div>;
}


// mapStateToProps
function mapStateToProps(state) {
  return {
    count: state.count
  }
}

// mapDispatchToProps
const mapDispatchToProps = {
  incrementCounter,
  decreaseCounter
}

//connect()
export default connect(mapStateToProps, mapDispatchToProps)(Counter);