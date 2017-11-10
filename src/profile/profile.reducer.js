const initialState = {
	name: ''
};


export default(state = initialState, action) => {
	switch(action.type) {
		case FETCH_PROFILE:
			return state;
		case FETCH_PROFILE_SUCCEEDED: 
			console.log('FETCH PROFILE SUCCESS -- profile.reducer');
			return { ...state, name: 'pkname' };
		default:
			return state;
	}
}