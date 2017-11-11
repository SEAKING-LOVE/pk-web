const initialState = {
	pokemon: []
};


export default(state = initialState, action) => {
	console.log('ENTERED REDUCER');
	switch(action.type) {
		case 'FETCH_ALL_POKEMON': {
			console.log('REDUER FETCH ALL PK', action)
			return state;
		}
		default:
			return state;
	}
}