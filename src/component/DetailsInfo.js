import React, {useCallback} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {deletePhotoFromStore, deleteUserFromStore} from '../redux/actions';
const DetailsInfo = ({user}) => {
  const dispatch = useDispatch(null);
  const navigation = useNavigation();
  const lat =
    user && user.address && user.address.geo ? user.address.geo.lat : '';
  const lon =
    user && user.address && user.address.geo ? user.address.geo.lng : '';

  const deleteContact = async () => {
    const payload = {
      id: user.id,
    };
    dispatch(deleteUserFromStore(payload));
    dispatch(deletePhotoFromStore(payload));
    ToastAndroid.show('Deleted Successfully', ToastAndroid.LONG);
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <View style={styles.SquareShapeView}>
        <View style={styles.outerContainer}>
          <TouchableOpacity style={styles.innerContainer}>
            <Text numberOfLines={1} style={styles.text}>
              {user.phone}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.innerContainer}>
            <Text numberOfLines={1} style={styles.text}>
              {user.email}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.innerContainer}>
            <Text numberOfLines={2} style={styles.text}>
              {user && user.address && user.address.street
                ? user.address.street
                : ''}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.innerContainer}>
            <Text numberOfLines={1} style={styles.text}>
              {user.website}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Button
        style={{borderRadius: 15}}
        title="Delete Contact"
        color="red"
        onPress={deleteContact}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },

  SquareShapeView: {
    width: 250,
    height: 250,
    backgroundColor: '#ffffff',
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 20,
  },
  innerContainer: {
    flexDirection: 'row',
    padding: 7,
    margin: 7,
    width: '100%',
  },
  outerContainer: {
    marginLeft: 10,
    marginTop: 15,
    marginRight: 5,
  },
  text: {
    marginLeft: 15,
    marginTop: 3,
    marginRight: 25,
  },
});

export default DetailsInfo;
