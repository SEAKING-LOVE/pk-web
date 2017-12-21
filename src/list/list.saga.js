// Use this instead of polyfill
import "regenerator-runtime/runtime";

import { call, put, takeLatest } from 'redux-saga/effects';

import { 
	REQUEST_ALL_POKEMON,
	REQUEST_UPDATE_SELECTED_ID,
	REQUEST_UPDATE_FILTERED_LIST
} from './list.types.js';
import { receiveAllPokemon, receiveUpdateSelectedId, receiveFilteredList } from './list.actions.js';
import { fetchData } from '../api.js';

function* getAllPokemon(action) {
	try {
		const data = yield call(fetchData, `pokemon/`);
		yield put(receiveAllPokemon(data));
	} catch (e) {
		console.log(e);
	}
}

function* getUpdatedSelectedID(action) {
	try {
		const selectedId = action.id;
		yield put(receiveUpdateSelectedId(selectedId));
		// NOTE: Use this version if you want to return basic Pokemon info on click SEE list.reducer.js
		// const data = yield call(fetchData, `pokemon/${action.id}`);
		// yield put(receiveUpdateSelectedId(data));
	} catch (e) {
		console.log(e);
	}
}

function* getFilteredList(action) {
	try {
		yield put(receiveFilteredList(action.list));
	} catch(e) {
		console.log(e);
	}
}

export default function* listSaga() {
	yield [
		takeLatest(REQUEST_ALL_POKEMON, getAllPokemon),
		takeLatest(REQUEST_UPDATE_SELECTED_ID, getUpdatedSelectedID),
		takeLatest(REQUEST_UPDATE_FILTERED_LIST, getFilteredList),
	]
}
