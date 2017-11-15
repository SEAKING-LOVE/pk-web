import { 
	REQUEST_POKEMON_PROFILE,
	RECEIVE_POKEMON_PROFILE_SUCCESS,
	RECEIVE_POKEMON_PROFILE_FAILURE
} from './profile.types.js';

export const requestPokemonProfile = id => ({type: REQUEST_POKEMON_PROFILE, id: id});
export const receivePokemonProfileSuccess = data => ({type: RECEIVE_POKEMON_PROFILE_SUCCESS, data});
export const receivePokemonProfileFailure = data => ({type: RECEIVE_POKEMON_PROFILE_FAILURE, data});