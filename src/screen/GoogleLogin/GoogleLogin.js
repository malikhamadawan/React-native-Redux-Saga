import React, {useEffect, useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {LoginManager, LoginBehavior} from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {styles} from './styles';
const GoogleLogin = () => {
  const [data, setData] = useState();
  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  const gooleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo);
      setData(userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log(error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
        // play services not available or outdated
      } else {
        console.log(error);
        // some other error happened
      }
    }
  };
  console.log('data', data?.user);

  const facebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile']).then(
      LoginManager.setLoginBehavior('web_only'),
      function (result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
          );
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  return (
    <View style={styles.container}>
      <Button title="Google Login" onPress={() => gooleLogin()} />
      <Text
        style={{
          fontSize: 20,
          color: 'black',
        }}
      >
        {data?.user.email}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
        }}
      >
        {data?.user.familyName}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
        }}
      >
        {data?.user.givenName}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
        }}
      >
        {data?.user.name}
      </Text>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
        }}
      >
        {data?.user.photo}
      </Text>
      <Button title="Facebook Login" onPress={() => facebookLogin()} />
    </View>
  );
};
export {GoogleLogin};
