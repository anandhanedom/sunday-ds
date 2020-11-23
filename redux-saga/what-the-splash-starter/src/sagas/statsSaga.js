import { take, fork, put } from 'redux-saga/effects';

import { IMAGES } from '../constants/index';
import { fetchImageStats } from '../api/index';
import { loadImageStats, setImageStats } from '../actions';

function* handleStatsRequest(id) {
    yield put(loadImageStats, id);
    const res = yield call(fetchImageStats, id);
    yield put(setImageStats(id, res.downloads.total));
}

function* watchStatsRequest() {
    while (true) {
        const { images } = yield take(IMAGES.LOAD_SUCCESS);

        for (let i = 0; i < images.length; i++) {
            yield fork(handleStatsRequest, images[i].id);
        }
    }
}

export default watchStatsRequest;
