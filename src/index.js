import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

// The action is what we dispatched from App.js
const firstReducer = (state = 0, action) => {
    if (action.type === 'BUTTON_ONE') {
        console.log('First reducer', action);
        return ++state;
    } else if (action.type === 'MINUS') {
        return --state;
    } else if (action.type === 'SET_FIRST') {
        return (state = action.value);
    } else if (action.type === 'SET_BOTH') {
        return (state = action.value[0]);
    }
    return state; // Return next state
};

const secondReducer = (state = [], action) => {
    if (action.type === 'BUTTON_TWO') {
        console.log('Second reducer', action);
        return [...state, 'oreo']; // Add oreo to state
    } else if (action.type === 'REMOVE_OREO') {
        state.pop();
        return state;
    } else if (action.type === 'SET_SECOND') {
        return (state = action.value);
    } else if (action.type === 'SET_BOTH') {
        return (state = action.value[1]);
    }
    return state;
};

// Create store can only take in one reducer
const storeInstance = createStore(
    // Combine the reducers and do some extra validation
    combineReducers({
        firstReducer, // same as `firstReducer: firstReducer`
        secondReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
