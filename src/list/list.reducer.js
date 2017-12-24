import {
	RECEIVE_ALL_POKEMON,
	RECEIVE_UPDATE_SELECTED_ID,
	REQUEST_UPDATE_FILTERED_LIST
} from './list.types.js';

const initialState = {
	selectedId: 151,
	rawList: [],
	filteredList: []
};

export default (state = initialState, { type, data }) => {
	switch (type) {
		case RECEIVE_ALL_POKEMON:
			return {...state, rawList: data};
		case RECEIVE_UPDATE_SELECTED_ID:
			return {...state, selectedId: data};
			// NOTE: Use this version if you're using the pokemon/:id endpoint SEE list.saga.js
			// return {...state, selectedId: data.id};
		case REQUEST_UPDATE_FILTERED_LIST: 
			return {...state, filteredList: data};
		default:
			return state;
	}
}