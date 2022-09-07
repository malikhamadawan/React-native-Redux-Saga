import {types} from '../types';

export const deleteUserFromStore = data => {
  return {
    type: types.DELETE_DATA_FROM_STORE,
    payload: data.id,
  };
};

export const deletePhotoFromStore = data => {
  return {
    type: types.DELETE_PHOTO_FROM_STORE,
    payload: data.id,
  };
};
export const deleteUser = data => {
  return {
    type: types.SEND_REQUEST_DELETE_USER,
    payload: data,
  };
};

export const deleteUserSuccess = user => {
  return {
    type: types.SEND_REQUEST_DELETE_USER_SUCCESS,
    payload: user,
  };
};

export const deleteUserFailure = error => {
  return {
    type: types.SEND_REQUEST_DELETE_USER_FAILURE,
    user: {},
    error: error,
  };
};
