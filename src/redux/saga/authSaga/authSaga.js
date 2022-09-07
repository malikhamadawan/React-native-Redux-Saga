import {put, takeLatest} from 'redux-saga/effects';
import {types} from '../../actions/types';
import {loginUser} from '../../apis/contactApi';

export function* loginRequest() {
  yield takeLatest(types.LOGIN_REQUEST_REQUEST, login);
}
function* login({params, cbSuccess, cbFailure}) {
  // console.log('[Login paaram]', params);
  try {
    const res = yield loginUser(params);
    yield put({
      type: types.LOGIN_REQUEST_SUCCESS,
      params: res.data,
    });
    cbSuccess(res.data);
  } catch (err) {
    yield put({
      type: types.LOGIN_REQUEST_FAILURE,
      params: err,
    });
    cbFailure(err);
    console.log(err);
  }
}
