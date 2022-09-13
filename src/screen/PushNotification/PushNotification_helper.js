// import AsyncStorage from '@react-native-async-storage/async-storage';
// import messaging from '@react-native-firebase/messaging';

// export const requestUserPermission = async () => {
//   const authStatus = await messaging().requestPermission();
//   const enabled =
//     authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//     authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//   if (enabled) {
//     console.log('Authorization status:', authStatus);
//     GetToken();
//   }
// };

// async function GetToken() {
//   let fcmtoken = await AsyncStorage.getItem('fcmtoken');
//   console.log('oldtoken', fcmtoken);

//   if (!fcmtoken) {
//     try {
//       const fcmtoken = await messaging().getToken();
//       if (fcmtoken) {
//         console.log('newToken', fcmtoken);
//         await AsyncStorage.setItem('fcmtoken', fcmtoken);
//       }
//     } catch (error) {
//       console.log('error in fcmtoken', error);
//     }
//   }
// }

// export const NotificationTask = () => {
//   // Assume a message-notification contains a "type" property in the data payload of the screen to open

//   messaging().onNotificationOpenedApp(remoteMessage => {
//     console.log(
//       'Notification caused app to open from background state:',
//       remoteMessage.notification,
//     );
//     // navigation.navigate(remoteMessage.data.type);
//   });

//   messaging()
//     .getInitialNotification()
//     .then(remoteMessage => {
//       console.log(
//         'Notification caused app to open from quit state:',
//         remoteMessage.notification,
//       );
//     });

//   messaging().onMessage(async remoteMessage => {
//     console.log('Notification on forground state........', remoteMessage);
//   });
// };
