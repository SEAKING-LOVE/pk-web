// Use this instead of polyfill
import "regenerator-runtime/runtime";

import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_POKEMON_PROFILE } from './profile.types.js';
import { receivePokemonProfile } from './profile.actions.js';
import { fetchData } from '../api.js';

function* getPokemonProfile(action) {
	try {
		const data = yield call(fetchData, `pokemon/stats/${action.id}`);
		yield put(receivePokemonProfile(data));
	} catch (e) {
		console.log(e);
	}
}

export default function* profileSaga() {
	yield [
		takeLatest(REQUEST_POKEMON_PROFILE, getPokemonProfile)
	]
}
