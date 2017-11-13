import { REQUEST_POKEMON_PROFILE, RECEIVE_POKEMON_PROFILE } from './profile.types.js';

export const requestPokemonProfile = id => ({type: REQUEST_POKEMON_PROFILE, id: id});
export const receivePokemonProfile = data => ({type: RECEIVE_POKEMON_PROFILE, data});