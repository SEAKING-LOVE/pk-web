const initialState = {
	selectedId: 1,
	rawList: []
};


export default(state = initialState, action) => {
	switch(action.type) {
		case 'FETCH_ALL_POKEMON': {
			return { ...state, rawList: action.payload.data };
		}
		case 'UPDATE_SELECTED_ID': {
			return { ...state, selectedId: action.payload };
		}
		default:
			return state;
	}
}