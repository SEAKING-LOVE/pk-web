// Use this instead of polyfill
import "regenerator-runtime/runtime";

import { call, put, takeLatest } from 'redux-saga/effects';

import { REQUEST_TEST_API_DATA } from '../types/test_for_api';
import { receiveTestApiData } from '../actions/test_for_api';
import { fetchData } from '../api/test_for_api';

function* getTestApiData(action) {
	try {
		const data = yield call(fetchData);
		yield put(receiveTestApiData(data));
	} catch (e) {
		console.log(e);
	}
}

function* testApiSaga() {
	yield takeLatest(REQUEST_TEST_API_DATA, getTestApiData)
}

export default testApiSaga;
