// Use this instead of polyfill
import "regenerator-runtime/runtime";

import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_POKEMON_STATS } from './profile.types.js';
import { REQUEST_POKEMON_PROFILE } from './profile.types.js';
import { receivePokemonStats, receivePokemonProfile } from './profile.actions.js';
import { fetchData } from '../api.js';

function* getPokemonStats(action) {
	try {
		const data = yield call(fetchData, `pokemon/stats/${action.id}`);
		yield put(receivePokemonProfile(data));
		// yield put(receivePokemonStats(data));
	} catch (e) {
		console.log(e);
	}
}

function* getPokemonProfile(action) {
	console.log('SAGA PROFILE', action)
	let profile = {
		stats: {}
	};
	try {	
		profile.stats = yield call(fetchData, `pokemon/stats/${action.id}`);
		console.log('GOT STATS ??', profile);
		yield put(receivePokemonProfile(profile));
	} catch(e) {
		console.log(e);
	}
}

export default function* profileSaga() {
	yield [
		takeLatest(REQUEST_POKEMON_STATS, getPokemonStats),
		takeLatest(REQUEST_POKEMON_PROFILE, getPokemonProfile)
	]
}
