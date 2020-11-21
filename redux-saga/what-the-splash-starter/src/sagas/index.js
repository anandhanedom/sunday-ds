import { takeEvery, put } from 'redux-saga/effects';

// Here's how it works
// watcher saga -> actions -> worker saga

//worker saga
function* workerSaga() {
    console.log('hey from worker!!');

    yield put();
}

//watcher saga
function* rootSaga() {
    // console.log('Hello world!'); test saga is working or not

    yield takeEvery('HELLO', workerSaga);
}

export default rootSaga;
