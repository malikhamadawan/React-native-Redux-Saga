import {put, call, takeEvery, takeLatest} from 'redux-saga/effects';
import {types} from '../../actions/types';
import {getAllUsers} from '../../apis/contactApi';
export function* UserRequest() {
  yield takeEvery(types.SEND_REQUEST_GET_ALL_USER, getUsers);
}
function* getUsers() {
  try {
    const user = yield call(getAllUsers);
    yield put({type: types.SEND_REQUEST_GET_ALL_USER_SUCCESS, payload: user});
  } catch (err) {
    yield put({type: types.SEND_REQUEST_GET_ALL_USER_FAILURE, payload: error});
    console.log(err);
  }
}
