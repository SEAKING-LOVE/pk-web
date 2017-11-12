import API from '../api.js';

export const fetchAllPokemon = () => {
	return {
		type: 'FETCH_ALL_POKEMON',
		payload: API.allPokemon()
	}
}

export const updateSelectedId = (id) => {
	return {
		type: 'UPDATE_SELECTED_ID',
		payload: id
	}
}