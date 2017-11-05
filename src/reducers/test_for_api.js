import { RECEIVE_TEST_API_DATA } from '../types/test_for_api';

export default (state = {}, { type, data }) => {
	switch (type) {
		case RECEIVE_TEST_API_DATA:
			return data;
		default:
			return state;
	}
}