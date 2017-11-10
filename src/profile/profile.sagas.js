import { put, takeLatest } from 'redux-saga/effects';

function* fetchProfile(action) {
	try {
		yield put({ type: FETCH_PROFILE_SUCCEEDED, payload: 'fetch profile succeeded (saga)' });
	} catch(e) {
		yield put({ type: FETCH_PROFILE_FAILED, payload: { message: e.message }});
	}
}

function* profileSaga() {
	yield takeLatest(FETCH_PROFILE, fetchProfile);
}