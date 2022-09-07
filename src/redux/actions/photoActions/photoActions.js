import {types} from '../types';

export const fetchPhotoData = data => {
  return {
    type: types.SEND_REQUEST_GET_ALL_PHOTOS,
    payload: data,
  };
};

export const fetchPhotoSuccess = photos => {
  return {
    type: types.SEND_REQUEST_GET_ALL_PHOTOS_SUCCESS,
    payload: photos,
  };
};

export const fetchPhotoFailure = error => {
  return {
    type: types.SEND_REQUEST_GET_ALL_PHOTOS_FAILURE,
    payload: {},
    error: error,
  };
};

export const fetchPhotosData = data => {
  return {
    type: types.SEND_REQUEST_GET_DETAILS_PHOTOS,
    payload: data,
  };
};

export const fetchPhotosSuccess = photos => {
  return {
    type: types.SEND_REQUEST_GET_DETAILS_PHOTOS_SUCCESS,
    payload: photos,
  };
};

export const fetchPhotosFailure = error => {
  return {
    type: types.SEND_REQUEST_GET_DETAILS_PHOTOS_FAILURE,
    payload: {},
    error: error,
  };
};
