import {types} from '../../actions/types';

const initialState = {
  loading: false,
  photos: [],
  error: {},
};

export default photosReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    //************Photo Sates*************
    case types.SEND_REQUEST_GET_ALL_PHOTOS:
      return {
        ...state,
        loading: true,
      };
    case types.SEND_REQUEST_GET_ALL_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: payload,
        loading: false,
      };
    case types.SEND_REQUEST_GET_ALL_PHOTOS_FAILURE:
      return {
        ...state,
        photos: {},
        error: payload,
        loading: false,
      };
    case types.DELETE_PHOTO_FROM_STORE:
      return {
        ...state,
        photos: state.photos.filter(item => item.id !== payload),
      };
    //************SinglePhoto Sates*************
    case types.SEND_REQUEST_GET_DETAILS_PHOTOS:
      return {
        ...state,
        loading: true,
      };
    case types.SEND_REQUEST_GET_DETAILS_PHOTOS_SUCCESS:
      return {
        ...state,
        photo: payload,
        loading: false,
      };
    case types.SEND_REQUEST_GET_DETAILS_PHOTOS_FAILURE:
      return {
        ...state,
        photo: {},
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};
