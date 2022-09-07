import {fork} from 'redux-saga/effects';

// Sagas
import {loginRequest} from './authSaga/authSaga';
import {UserRequest} from './contactSaga/contactSaga';
import {deleteRequest} from './deleteSaga/deleteSaga';
import {detailRequest} from './detailSaga/detailSaga';
import {PhotosRequest, SinglePhotoRequest} from './photoSaga/photoSaga';
import {updateRequest} from './updateSaga/updateSaga';

// Export the root saga
export function* rootSaga() {
  yield fork(loginRequest);
  yield fork(UserRequest);
  yield fork(deleteRequest);
  yield fork(detailRequest);
  yield fork(PhotosRequest);
  yield fork(SinglePhotoRequest);
  yield fork(updateRequest);
}
