import {types} from '../types';

export const loginRequest = (params, cbSuccess, cbFailure) => {
  return {
    type: types.LOGIN_REQUEST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
