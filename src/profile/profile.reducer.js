import { 
	RECEIVE_POKEMON_STATS,
	RECEIVE_POKEMON_PROFILE_SUCCESS,
	RECEIVE_POKEMON_PROFILE_FAILURE,
} from './profile.types.js';

const initialState = {
	receiveProfileSuccess: false,
	pendingProfile: false, 
	overview: {
		id: 0,
		name: '',
		height: '',
		weight: '',
		baseExperience: ''
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
		default: {
			return state;
		}
	}
}