import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet, View, ActivityIndicator} from 'react-native';
import DetailsHeader from '../../component/DetailsHeader';
import DetailsInfo from '../../component/DetailsInfo';
import {fetchDetailsData, fetchPhotoData} from '../../redux/actions';
import {useDispatch, useSelector} from 'react-redux';

const DetailScreen = ({route}) => {
  const {id} = route.params;
  const dispatch = useDispatch();
  const payload = {
    id: id,
  };
  useEffect(() => {
    dispatch(fetchDetailsData(payload));
    dispatch(fetchPhotoData(payload));
  }, []);

  const {user, loading} = useSelector(state => state.detailsReducer);
  const singlePhoto = useSelector(state => state.photoReducer);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <ActivityIndicator
          style={styles.activityIndicator}
          size={'large'}
          color={'black'}
        />
      ) : (
        <View style={{flex: 1}}>
          <DetailsHeader user={user} />
          <DetailsInfo user={user} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
  },
});

export default DetailScreen;
