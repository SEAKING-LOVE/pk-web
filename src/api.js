import axios from 'axios';

const urlBuilder = (path) => {
	return `${API_HOST}/v1/${path}`;
};


const API = {
	allPokemon: () => {
		return axios.get( urlBuilder('pokemon/') );
	},
	stats: (id) => {
		return '';
	}
};


export default API;