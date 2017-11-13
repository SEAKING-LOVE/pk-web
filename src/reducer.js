import { combineReducers } from 'redux';
import listReducer from './list/list.reducer.js';
import profileReducer from './profile/profile.reducer.js';

const reducers = combineReducers({
	list: listReducer,
	profile: profileReducer
});

export default reducers;
