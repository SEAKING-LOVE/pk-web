const initialState = {
	rawList: []
};


export default(state = initialState, action) => {
	switch(action.type) {
		case 'FETCH_ALL_POKEMON': {
			return { ...state, rawList: action.payload.data };
		}
		default:
			return state;
	}
}