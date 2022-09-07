//Delete from store
export {
  deleteUserFromStore,
  deletePhotoFromStore,
  deleteUser,
  deleteUserSuccess,
  deleteUserFailure,
} from './DeleteFromStore/DeleteFromStoreActions';

//Details
export {
  fetchDetailsData,
  fetchDetailsDataSuccess,
  fetchDetailsDataFailure,
} from './detailActions/DetailsActions';

//contact
export {
  fetchContactData,
  fetchDataSuccess,
  fetchDataFailure,
} from './contactActions/contactActions';

// photo
export {
  fetchPhotoData,
  fetchPhotoSuccess,
  fetchPhotoFailure,
  fetchPhotosData,
  fetchPhotosSuccess,
  fetchPhotosFailure,
} from './photoActions/photoActions';
export {loginRequest} from './authAction/authAction';
export {updateUserProfile} from './updateActions/updateActions';
