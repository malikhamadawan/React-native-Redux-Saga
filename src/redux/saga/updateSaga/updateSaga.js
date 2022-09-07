import {put, takeLatest} from 'redux-saga/effects';
import {types} from '../../actions/types';
import {UpdateUser} from '../../apis/contactApi';

export function* updateRequest() {
  yield takeLatest(types.UPDATE_PROFILE_REQUEST, updateProfile);
}
function* updateProfile(params) {
  // console.log('[update paaram]', params);
  try {
    const res = yield UpdateUser(params?.params);
    console.log('res......', res);
    if (res.data) {
      yield put({
        type: types.UPDATE_PROFILE_SUCCESS,
        params: res.data,
      });
      params?.cbSuccess(res.data);
    } else {
      yield put({
        type: types.UPDATE_PROFILE_FAILURE,
        params: res,
      });
      console.log(res);
      params?.cbFailure(res);
    }
  } catch (err) {
    yield put({
      type: types.UPDATE_PROFILE_FAILURE,
      params: err,
    });
    console.log(err);
    params?.cbFailure(err);
  }
}
