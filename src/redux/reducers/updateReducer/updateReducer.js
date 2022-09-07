import {types} from '../../actions/types';

const initialState = {
  loading: false,
  isSuccess: false,
  isFailure: false,
  profile_image: null,
  userData: null,
};
const profileReducer = (state = initialState, actions) => {
  const {type, payload} = actions;
  switch (type) {
    //************Profile Image*************
    case types.UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        profile_image: payload?.profile_image,
        userData: payload,
      };
    default:
      return state;
  }
};
export default profileReducer;
