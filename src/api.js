// import axios from 'axios';

// const urlBuilder = (path) => {
// 	return `${API_HOST}/v1/${path}`;
// };


// const API = {
// 	allPokemon: () => {
// 		return axios.get( urlBuilder('pokemon/') );
// 	},
// 	statsByPkId: (id) => {
// 		return axios.get( urlBuilder(`pokemon/stats/${id}`) );
// 	}
// };


// export default API;

const urlBuilder = (path) => {
	return `${API_HOST}/v1/${path}`;
};

export const fetchData = async (path) => {
	try {
		const response = await fetch(urlBuilder(path));
		const data = await response.json();
		return data;
	} catch (e) {
		console.log(e);
	}
}