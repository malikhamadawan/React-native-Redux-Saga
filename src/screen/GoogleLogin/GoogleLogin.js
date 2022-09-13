import React, {useEffect, useState} from 'react';
import {View, Text, Button, Image} from 'react-native';
import {
  LoginManager,
  LoginButton,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {styles} from './styles';
const GoogleLogin = () => {
  const [data, setData] = useState();
  const [edit, setEdit] = useState();

  useEffect(() => {
    GoogleSignin.configure();
  }, []);

  //gooleLogin
  const gooleLogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
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
  // console.log('data', data?.user);

  //facebookLogin
  const facebookLogin = () => {
    LoginManager.logInWithPermissions(['public_profile', 'email']).then(
      // LoginManager.setLoginBehavior('web_only'),
      function (result, error) {
        if (error) {
          alert('login has error: ' + result.error);
        } else if (result.isCancelled) {
          alert('login is cancelled.');
        } else {
          AccessToken.getCurrentAccessToken().then(data => {
            const infoRequest = new GraphRequest(
              '/me?fields=name,picture',
              null,
              _responseInfoCallback,
            );
            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();
            console.log('result', data);
          });
        }
      },
      function (error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  const _responseInfoCallback = (error, result) => {
    if (error) {
      alert('Error fetching data: ' + error.toString());
    } else {
      alert('Result Name: ' + result.name);
      console.log('result===================', result.name);
      setEdit(result);
    }
  };

  console.log('edit----------', edit);
  console.log('picture========================', edit?.picture.data.url);

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

      <Image
        source={{uri: data?.user.photo}}
        style={{
          height: 150,
          width: 150,
        }}
      />
      <Button title="Facebook Login" onPress={() => facebookLogin()} />

      <Text
        style={{
          fontSize: 50,
          color: 'black',
        }}
      >
        {edit?.name}
      </Text>
      <Image
        source={{uri: edit?.picture.data.url}}
        style={{
          height: 250,
          width: 250,
          // backgroundColor: 'red',
        }}
      />
    </View>
  );
};
export {GoogleLogin};
