import {types} from '../types';

export const fetchDetailsData = data => {
  return {
    type: types.SEND_REQUEST_GET_DETAILS_USER,
    payload: data,
  };
};

export const fetchDetailsDataSuccess = user => {
  return {
    type: types.SEND_REQUEST_GET_DETAILS_USER_SUCCESS,
    payload: user,
  };
};

export const fetchDetailsDataFailure = error => {
  return {
    type: types.SEND_REQUEST_GET_DETAILS_USER_FAILURE,
    payload: {},
    error: error,
  };
};
