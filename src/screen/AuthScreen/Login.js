import React, {useState} from 'react';
import {View, Text, TextInput, Button, Alert} from 'react-native';
import styles from './styles';
import {useDispatch} from 'react-redux';
import {loginRequest} from '../../redux/actions/authAction';
import {updateUserProfile} from '../../redux/actions';
const Login = ({navigation}) => {
  const [edit, setEdit] = useState({
    title: '',
    body: '',
    id: '',
  });

  //Redux States
  const dispatch = useDispatch();
  const onChangeText = (type, data) => {
    setEdit({
      ...edit,
      [type]: data,
    });
  };

  //onSubmit
  const SubmitHandler = () => {
    const cbSuccess = res => {
      if (res) {
        navigation?.replace('Home');
        console.log('====================================');
        console.log(res);
        console.log('====================================');
      } else {
        console.log('====================================');
        console.log(res);
        console.log('====================================', 'hamad');
      }
    };
    const cbFailure = message => {
      console.log('====================================');
      console.log(message);
      console.log('====================================');
    };

    const data = {
      title: edit?.title,
      body: edit?.body,
      id: edit.id,
    };
    dispatch(
      updateUserProfile(data, cbSuccess, cbFailure),
      // loginRequest(data, cbSuccess, cbFailure),
      // console.log('res', data),
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        placeholderTextColor={'black'}
        style={styles.inputStyle}
        value={edit.title}
        onChangeText={txt => onChangeText('title', txt)}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={'black'}
        style={styles.inputStyle}
        value={edit.body}
        onChangeText={txt => onChangeText('body', txt)}
      />
      <TextInput
        placeholder="ID"
        placeholderTextColor={'black'}
        style={styles.inputStyle}
        value={edit.id}
        onChangeText={txt => onChangeText('id', txt)}
      />
      <Button
        title="Submit"
        onPress={() => {
          SubmitHandler();
        }}
      />
    </View>
  );
};
export default Login;
