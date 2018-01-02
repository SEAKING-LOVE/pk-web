import {
	RECEIVE_POKEMON_PROFILE_SUCCESS,
	RECEIVE_POKEMON_PROFILE_FAILURE,
	RECEIVE_MOVE_SUCCESS,
	RECEIVE_MOVE_FAILURE
} from './profile.types.js';

const initialState = {
	receiveProfileSuccess: false,
	pendingProfile: false,
	overview: {
		id: 0,
		name: '',
		height: 0,
		weight: 0,
		baseExperience: 0,
		baseHappiness: 0,
		captureRate: 0,
		artwork: '',
		sprite: '',
		cry: '',
		fottprint: null
	},
	stats: {
		hp: 0,
		attack: 0,
		defense: 0,
		specialAttack: 0,
		specialDefense: 0,
		speed: 0
	},
	types: [{ id: 0, name: '' }],
	abilities: [{ id: 0, name: '', hidden: false }],
	moves: {
		machine: [{ id: 0, level: 0, name: '' }],
		'level-up': [{ id: 0, level: 0, name: '' }],
		egg: [{ id: 0, level: 0, name: '' }],
		tutor: [{ id: 0, level: 0, name: '' }],
	},
	evolutions: [
		{
			id: 0,
			name: '',
			predecessorId: null,
			chainId: 0
		}
	]
};

export default(state = initialState, { type, data }) => {
	switch(type) {
		case RECEIVE_POKEMON_PROFILE_SUCCESS: {
			const receiveProfileSuccess = true;
			const overview = data.overview;
			const stats = data.stats;
			const types = data.types;
			const abilities = data.abilities;
			const moves = data.moves;
			const evolutions = data.evolutions;
			return {
				...state,
				receiveProfileSuccess,
				overview,
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
		case RECEIVE_MOVE_SUCCESS: {
			let moves = Object.assign({}, state.moves);
			Object.keys(moves).forEach(category => {
				const index = moves[category].findIndex((move) => {return move.id == data.id;})
				if(index !== -1) {
					moves[category][index].description = data.description;
				}
			})
			return {...state, moves};
		}
		case RECEIVE_MOVE_FAILURE: {
			return {};
		}
		default: {
			return state;
		}
	}
}
