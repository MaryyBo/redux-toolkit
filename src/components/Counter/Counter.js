import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {
    console.log('Counter props:', props);
    return (
        <div>
            <p>Count: 1</p>
            <p>Step: 1</p>
            <button>Increment</button>
            <button>Decrement</button>
        </div>
    );
}

function mapStateToProps(state) {
    return state;
}


const CounterWithState = connect(mapStateToProps)(Counter);
export default CounterWithState;
