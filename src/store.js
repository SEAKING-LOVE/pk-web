import { createStore, applyMiddleware } from 'redux';

import reducer from './reducer.js';
import { sagas, runSagas } from './sagas.js';

const store = createStore(
	reducer,
	applyMiddleware(sagas)
);

runSagas();

export default store;