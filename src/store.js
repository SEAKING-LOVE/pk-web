import { applyMiddleware, createStore } from 'redux';
import promise from 'redux-promise';
import reducer from './reducer.js';

const middleware = applyMiddleware(promise);

export default createStore(reducer, middleware);