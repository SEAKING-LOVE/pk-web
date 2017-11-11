import API from '../api.js';

export const fetchAllPokemon = (id) => {
	return {
		type: 'FETCH_ALL_POKEMON',
		payload: API.allPokemon()
	}
}