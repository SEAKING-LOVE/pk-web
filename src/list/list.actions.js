import { REQUEST_ALL_POKEMON, RECEIVE_ALL_POKEMON } from './list.types.js';
import { REQUEST_UPDATE_SELECTED_ID, RECEIVE_UPDATE_SELECTED_ID } from './list.types.js';

export const requestAllPokemon = () => ({type: REQUEST_ALL_POKEMON});
export const receiveAllPokemon = data => ({type: RECEIVE_ALL_POKEMON, data});

export const requestUpdateSelectedId = id => ({type: REQUEST_UPDATE_SELECTED_ID, id: id});
export const receiveUpdateSelectedId = data => ({type: RECEIVE_UPDATE_SELECTED_ID, data});