export const fetchAllPokemon = (id) => {
	return dispatch => {
		dispatch({
			type: 'FETCH_ALL_POKEMON',
			payload: 'list payload test'
		})
	}
}