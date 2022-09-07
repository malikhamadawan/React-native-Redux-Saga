import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    marginHorizontal: 10,
    width: '95%',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 15,
    flexDirection: 'column',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    width: '100%',
    marginLeft: 10,
    marginTop: 3,
  },
  arrow: {
    marginLeft: 15,
    marginTop: 6,
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-end',
    alignSelf: 'flex-end',
  },
  phoneContainer: {
    marginLeft: 15,
    width: '100%',
  },
  phone: {
    fontSize: 14,
    fontWeight: 'normal',
    width: '92%',
    marginTop: 2,
  },
  profileImgContainer: {
    marginLeft: 4,
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  profileImg: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

export default styles;
