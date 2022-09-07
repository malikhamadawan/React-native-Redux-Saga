import {HTTP_CLIENT} from '../utilities/endpoints';
//Authentication Requests
export const getAllUsers = params => {
  return HTTP_CLIENT.get(params);
};
export const getAllPhotos = params => {
  return HTTP_CLIENT.get(params);
};
