import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

// Create an array of middleware items.
const middle = [thunk];

// Create store
const store 