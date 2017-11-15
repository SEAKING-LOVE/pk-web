// Use this instead of polyfill
import "regenerator-runtime/runtime";

import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchData } from '../api.js';
import { REQUEST_POKEMON_STATS, REQUEST_POKEMON_PROFILE } from './profile.types.js';
import { 
	receivePokemonStats,
	receivePokemonProfileSuccess,
	receivePokemonProfileFailure
} from './profile.actions.js';

function* getPokemonProfile(action) {
	let profile = {
		general: {},
		stats: {},
		types: [],
		abilities: [],
		moves: [],
	};
	try {	
		profile.general = yield call(fetchData, `pokemon/${action.id}`);
		profile.stats = yield call(fetchData, `pokemon/stats/${action.id}`);
		profile.types = yield call(fetchData, `pokemon/types/${action.id}`);
		profile.abilities = yield call(fetchData, `pokemon/abilities/${action.id}`);
		profile.moves = yield call(fetchData, `pokemon/moves/${action.id}`);

		yield put(receivePokemonProfileSuccess(profile));

	} catch(e) {
		yield put(receivePokemonProfileFailure(e));
	}
}

export default function* profileSaga() {
	yield [
		takeLatest(REQUEST_POKEMON_PROFILE, getPokemonProfile)
	]
}
