import { SET_MESSAGE_SUCCEEDED } from '../types/message';

const initState = {
	message: ''
}

export default (state = initState, action) => {
	console.log('asdfasdf',action.payload)
	switch(action.type) {
		case SET_MESSAGE_SUCCEEDED:
		console.log('asdfasdfasdfasdfasdf', action)
			return { ...state, message: action.payload.message }
		default:
			return state
	}
}