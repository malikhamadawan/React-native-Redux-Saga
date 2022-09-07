import {put, call, takeEvery} from 'redux-saga/effects';
import {types} from '../../actions/types';
import {getDetailsofUser} from '../../apis/contactApi';

export function* detailRequest() {
  yield takeEvery(types.SEND_REQUEST_GET_DETAILS_USER, getDetails);
}
function* getDetails({payload, error}) {
  try {
    const user = yield call(getDetailsofUser, payload);
    yield put({
      type: types.SEND_REQUEST_GET_DETAILS_USER_SUCCESS,
      payload: user,
    });
  } catch (err) {
    yield put({
      type: types.SEND_REQUEST_GET_DETAILS_USER_FAILURE,
      payload: error,
    });
    console.log(err);
  }
}
