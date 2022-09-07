import {put, call, takeEvery} from 'redux-saga/effects';
import {types} from '../../actions/types';
import {getAllPhotos, getPhotoofUser} from '../../apis/contactApi';

export function* PhotosRequest() {
  yield takeEvery(types.SEND_REQUEST_GET_ALL_PHOTOS, getPhotos);
}
function* getPhotos() {
  try {
    const photos = yield call(getAllPhotos);
    yield put({
      type: types.SEND_REQUEST_GET_ALL_PHOTOS_SUCCESS,
      payload: photos,
    });
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_GET_ALL_PHOTOS_FAILURE,
      payload: err,
    });
    console.log(err);
  }
}

export function* SinglePhotoRequest() {
  yield takeEvery(types.SEND_REQUEST_GET_DETAILS_PHOTOS, getPhoto);
}
function* getPhoto({payload, error}) {
  try {
    const user = yield call(getPhotoofUser, payload);
    yield put({
      type: types.SEND_REQUEST_GET_DETAILS_PHOTOS_SUCCESS,
      payload: user,
    });
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_GET_DETAILS_PHOTOS_FAILURE,
      payload: error,
    });
    console.log(err);
  }
}
