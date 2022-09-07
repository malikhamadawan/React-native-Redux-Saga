import {types} from '../types';

export const updateUserProfile = (params, cbSuccess, cbFailure) => {
  return {
    type: types.UPDATE_PROFILE_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};
