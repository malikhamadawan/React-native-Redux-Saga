import {put, call, takeEvery} from 'redux-saga/effects';
import {types} from '../../actions/types';
import {deleteUserFromList} from '../apis/contactApi';

export function* deleteRequest() {
  yield takeEvery(types.SEND_REQUEST_DELETE_USER, deleteUser);
}
function* deleteUser({payload, error}) {
  try {
    const user = yield call(deleteUserFromList, payload);
    yield put({
      type: types.SEND_REQUEST_DELETE_USER_SUCCESS,
      payload: user,
    });
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_GET_ALL_PHOTOS_FAILURE,
      payload: error,
    });
    console.log(err);
  }
}
