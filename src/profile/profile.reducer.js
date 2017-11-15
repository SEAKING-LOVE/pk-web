import { 
	RECEIVE_POKEMON_STATS,
	RECEIVE_POKEMON_PROFILE_SUCCESS,
	RECEIVE_POKEMON_PROFILE_FAILURE,
} from './profile.types.js';
import {  } from './profile.types.js';

const initialState = {
	receiveProfileSuccess: false,
	pendingProfile: false, 
	general: {
		id: 0,
		identifier: '',
		height: '',
		weight: '',
		baseExperience: ''
	},
	stats: {
		hp: 0,
		attack: 0,
		defense: 0,
		'special-attack': 0,
		'special-defense': 0,
		speed: 0
	},
	types: [{ id: 0, identifier: '' }],
	abilities: [{ id: 0, identifier: '', hidden: false }],
	moves: {
		machine: [{ id: 0, level: 0, identifier: '' }],
		'level-up': [{ id: 0, level: 0, identifier: '' }],
		egg: [{ id: 0, level: 0, identifier: '' }],
		tutor: [{ id: 0, level: 0, identifier: '' }],
	},
	evolutions: []
};

export default(state = initialState, { type, data }) => {
	switch(type) {
		case RECEIVE_POKEMON_PROFILE_SUCCESS: {
			const receiveProfileSuccess = true;
			const general = data.general;
			const stats = data.stats;
			const types = data.types;
			const abilities = data.abilities;
			const moves = data.moves;
			const evolutions = data.evolutions;
			return { 
				...state,
				receiveProfileSuccess,
				general,
				stats,
				types,
				abilities,
				moves,
				evolutions
			};
		}
		case RECEIVE_POKEMON_PROFILE_FAILURE: {
			return { ...state, receiveProfileSuccess: false };
		}
		default: {
			return state;
		}
	}
}