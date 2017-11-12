import API from '../api.js';

export const fetchStats = (id) => {
	console.log('ACTIONS', id);
	return {
		type: 'FETCH_STATS',
		payload: API.statsByPkId(id)
	}
}