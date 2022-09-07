import {combineReducers} from 'redux';
import contactReducer from './contactReducer/contactReducer';
import photosReducer from './photoReducer/photosReducer';
import detailsReducer from './detailReducer/detailsReducer';
import deleteReducer from './deleteReducer/deleteReducer';
import authReducer from './authReducer/authReducer';
import profileReducer from './updateReducer/updateReducer';

export default combineReducers({
  contactReducer,
  photosReducer,
  detailsReducer,
  deleteReducer,
  authReducer,
  profileReducer,
});
