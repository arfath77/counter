import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';

const App = (props) => {
    return (
        <div>
            <button onClick={props.increment}>Increment</button>
            <button onClick={props.decrement}>Decrement</button>
            <p>Counter : {props.count}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {count: state.count};
}


export default connect(mapStateToProps, {increment, decrement})(App);