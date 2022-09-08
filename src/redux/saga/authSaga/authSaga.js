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
    console.log('res......', res);
    if (res.data) {
      yield put({
        type: types.LOGIN_REQUEST_SUCCESS,
        params: res.data,
      });
      cbSuccess(res.data);
    } else {
      yield put({
        type: types.LOGIN_REQUEST_FAILURE,
        params: res,
      });
      cbFailure(res);
      console.log(res);
    }
  } catch (err) {
    yield put({
      type: types.LOGIN_REQUEST_FAILURE,
      params: err,
    });
    cbFailure(err);
    console.log(err);
  }
}
