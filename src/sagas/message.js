// Use this instead of polyfill
import "regenerator-runtime/runtime";

import { put, takeLatest } from 'redux-saga/effects';

import { SET_MESSAGE_REQUEST, SET_MESSAGE_SUCCEEDED, SET_MESSAGE_FAILED } from '../types/message';

function* setMessage(action) {
	try {
		yield put({type: SET_MESSAGE_SUCCEEDED, payload: {message: action.payload.message} });
	} catch (e) {
		yield put({type: SET_MESSAGE_FAILED, payload: {message: e.message} });
	}
}

function* messageSaga() {
	yield takeLatest(SET_MESSAGE_REQUEST, setMessage)
}

export default messageSaga;