import {combineReducers} from 'redux';

const counter = (count = 0 , action) => {
    if (action.type === 'increment'){
        return count += 1;
    }
    if (action.type === 'decrement'){
        return count -= 1;
    }

    return count;
}

export default combineReducers({
    count : counter
})