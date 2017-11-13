import createSagaMiddleWare from 'redux-saga';

import listSaga from './list/list.saga.js';
import profileSaga from './profile/profile.saga.js';

const sagaMiddleWare = createSagaMiddleWare();

const runSagas = () => {
	sagaMiddleWare.run(listSaga);
	sagaMiddleWare.run(profileSaga);
}

export { sagaMiddleWare as sagas, runSagas };
