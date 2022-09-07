import {types} from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  user: null,
};

export default authReducer = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    case types.LOGIN_REQUEST_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isFailure: false,
        user: payload,
      };
    case types.LOGIN_REQUEST_FAILURE:
      return {
        ...state,
        isSuccess: false,
        isFailure: true,
        user: null,
      };
    default:
      return state;
  }
};
