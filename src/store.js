import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga';

import messageReducer from './reducers/message';
import testForApiReducer from './reducers/test_for_api';
import messageSaga from './sagas/message';
import testForApi from './sagas/test_for_api';

const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
	messageReducer,
	testForApiReducer
})

const store = createStore(
	reducer,
	applyMiddleware(thunk, sagaMiddleware)
)

sagaMiddleware.run(messageSaga);
sagaMiddleware.run(testForApi);

export default store;