export const fetchProfile = (id) => {
	return dispatch => {
		dispatch({
			type: 'FETCH_PROFILE',
			payload: 'profile payload test'
		})
	}
}