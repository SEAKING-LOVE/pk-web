import API from '../api.js';

export const fetchAllPokemon = () => {
	return {
		type: 'FETCH_ALL_POKEMON',
		payload: API.allPokemon()
	}
}