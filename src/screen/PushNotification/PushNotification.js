import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {
  NotificationTask,
  requestUserPermission,
} from './PushNotification_helper';
const PushNotification = () => {
  useEffect(() => {
    requestUserPermission();
    NotificationTask();
  }, []);
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: 'white',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          color: 'black',
        }}
      >
        Push Notification
      </Text>
    </View>
  );
};
export {PushNotification};
