import API from '../api.js';

export const fetchStats = (id) => {
	return {
		type: 'FETCH_STATS',
		payload: API.statsByPkId(id)
	}
}