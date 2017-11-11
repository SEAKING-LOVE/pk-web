const initialState = {
	stats: []
};


export default(state = initialState, action) => {
	switch(action.type) {
		case 'FETCH_STATS': {
			return { ...state, stats: action.payload.data };
		}
		default: {
			return state;
		}
	}
}