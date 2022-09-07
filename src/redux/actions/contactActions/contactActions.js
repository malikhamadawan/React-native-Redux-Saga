import {types} from '../types';

export const fetchContactData = data => {
  return {
    type: types.SEND_REQUEST_GET_ALL_USER,
    payload: data,
  };
};

export const fetchDataSuccess = user => {
  return {
    type: types.SEND_REQUEST_GET_ALL_USER_SUCCESS,
    payload: user,
  };
};

export const fetchDataFailure = error => {
  return {
    type: types.SEND_REQUEST_GET_ALL_USER_FAILURE,
    payload: {},
    error: error,
  };
};
