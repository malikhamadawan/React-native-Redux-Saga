import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  View,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Text,
  ScrollView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchContactData, fetchPhotoData} from '../../redux/actions';
import styles from './styles';

const HomeScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const {user, loading} = useSelector(state => state.contactReducer);
  const photos = useSelector(state => state.photosReducer.photos);

  const goToDetailsScreen = id => {
    navigation.navigate('Details', {id: id});
  };

  useEffect(() => {
    dispatch(fetchContactData({}));
    dispatch(fetchPhotoData({}));
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size={'large'}
          color={'black'}
        />
      ) : (
        <ScrollView style={styles.scrollView}>
          <View>
            {photos.map(photo => {
              const {id} = photo;
              return (
                <View style={{flexDirection: 'row', padding: 10}} key={id}>
                  <TouchableHighlight
                    onPress={() => goToDetailsScreen(id)}
                    style={[
                      styles.profileImgContainer,
                      {borderColor: 'green', borderWidth: 1},
                    ]}
                  >
                    <Image
                      source={{
                        uri: photo.url,
                      }}
                      style={styles.profileImg}
                    />
                  </TouchableHighlight>
                  {user.map(user => {
                    if (user.id === id) {
                      return (
                        <View key={id} style={{flexDirection: 'row'}}>
                          <TouchableOpacity
                            onPress={() => goToDetailsScreen(id)}
                            key={user.borderWidth}
                          >
                            <Text style={styles.name}>
                              {user.name}
                              {'\n'}
                              <View>
                                <Text style={styles.phone}>{user.phone}</Text>
                              </View>
                            </Text>
                          </TouchableOpacity>
                        </View>
                      );
                    } else {
                      return null;
                    }
                  })}
                </View>
              );
            })}
          </View>
        </ScrollView>
      )}
    </View>
  );
};
export default HomeScreen;
