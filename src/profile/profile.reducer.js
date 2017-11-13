import { RECEIVE_POKEMON_PROFILE } from './profile.types.js';

const initialState = {
	stats: {
		hp: 0,
		attack: 0,
		defense: 0,
		'special-attack': 0,
		'special-defense': 0,
		speed: 0
	}
};

export default(state = initialState, { type, data }) => {
	switch(type) {
		case RECEIVE_POKEMON_PROFILE: {
			return { ...state, stats: data };
		}
		default: {
			return state;
		}
	}
}