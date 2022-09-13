import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {fcmService} from './FCMService';
import {localNotificationService} from './LocalNotificationService';
const PushNotification = () => {
  useEffect(() => {
    setupNotifications()
    sendFCMTokenToServer()
    // localNotificationService.showNotification()
  }, []);

  const setupNotifications = () => {
    fcmService.registerAppWithFCM();
    fcmService.register(onRegister, onNotification, onOpenNotification);
    localNotificationService.configure(onOpenNotification);
  };

const onRegister = async(remoteMessage)=>{
  console.log('remote------------',remoteMessage)
}

const onOpenNotification=(remoteMessage)=>{
  console.log('remote------------------',remoteMessage)
}

  const onNotification = async (notifyRes, remoteMessage) => {
    console.log('[remoteMessage home]', remoteMessage);
    console.log('[notifyRes home]', notifyRes);
    try {
      let notify = {
        ...remoteMessage.data,
        ...remoteMessage.notification,
      };

      const options = {
        soundName: 'default',
        playSound: true,
      };

      localNotificationService.showNotification(
        '0',
        notify.title,
        notify.body,
        notify,
        options,
      );
    } catch (err) {
      console.log('[errrr]', err);
      //  alert("err in home!!", err);
    }
  };


  const sendFCMTokenToServer = async fcmToken => {
    try {
      if (fcmToken) {
        console.log('[FCM Token]', fcmToken);
        try {
          let data = new FormData();
          data.append('token', fcmToken);
          const cbSuccess = res => {
            console.log('[Notification sent to server Yeaaaaaaaah!!!!]');
          };
          const cbFailure = err => { };
          dispatch(sendFCMtoken(data, fcmToken, cbSuccess, cbFailure));
        } catch (err) {
          setLoading(false);
        }
      }
    } catch (error) {
      console.log('[error]', error);
    }
  };
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}>
      <Text
        style={{
          fontSize: 20,
          color: 'black',
        }}>
        Push Notification
      </Text>
    </View>
  );
};
export {PushNotification};
