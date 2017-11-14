import { REQUEST_POKEMON_STATS, RECEIVE_POKEMON_STATS } from './profile.types.js';
import { REQUEST_POKEMON_TYPES, RECEIVE_POKEMON_TYPES } from './profile.types.js';
import { REQUEST_POKEMON_PROFILE, RECEIVE_POKEMON_PROFILE } from './profile.types.js';

// export const requestPokemonProfile = id => ({type: REQUEST_POKEMON_STATS, id: id});
// export const receivePokemonProfile = data => ({type: RECEIVE_POKEMON_STATS, data});

// export const requestPokemonTypes = 

export const requestPokemonStats = id => ({type: REQUEST_POKEMON_STATS, id: id});
export const receivePokemonStats = data => ({type: RECEIVE_POKEMON_STATS, data});

export const requestPokemonProfile = id => ({type: REQUEST_POKEMON_PROFILE, id: id});
export const receivePokemonProfile = data => ({type: REQUEST_POKEMON_PROFILE, data});