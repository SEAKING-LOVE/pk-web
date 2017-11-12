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