import { takeEvery, select, call, put } from 'redux-saga/effects';

import { IMAGES } from '../constants/index';
import { fetchImages } from '../api/index';

//Actions
import { setImages, setError } from '../actions/index';

const getPage = state => state.nextPage;

function* handleImagesLoad() {
    try {
        const page = yield select(getPage);
        const images = yield call(fetchImages, page);
        yield put(setImages(images));
    } catch (err) {
        //dispatch error
        yield put(setError(err.toString()));
    }
}

export default function* watchImagesLoad() {
    yield takeEvery(IMAGES.LOAD, handleImagesLoad);
}
