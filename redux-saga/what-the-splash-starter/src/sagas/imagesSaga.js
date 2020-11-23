import { takeEvery, select } from 'redux-saga/effects';

import { IMAGES } from '../constants/index';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    const page = yield select(getPage);
    console.log('page', page);
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
