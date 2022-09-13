import PushNotification, {Importance} from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {Platform} from 'react-native';

// ID for grouping notifications, always the same
const SUMMARY_ID = `Tabo-Customer-Summary`;

class LocalNotificationService {
  configure = (onOpenNotification, remoteMessage) => {
    PushNotification.createChannel(
      {
        channelId: 'Tabo-Customer', // (required)
        channelName: 'Tabo customer', // (required)
        channelDescription: 'A channel to categorise your notifications', // (optional) default: undefined.
        soundName: 'default', // (optional) See `soundName` parameter of `localNotification` function
        importance: Importance.HIGH, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
      },
      created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );

    PushNotification.configure({
      onRegister: function (token) {},
      onNotification: function (notification) {
        // if (!notification?.data) {
        //  return;
        // }
        // notification.userInteraction = true;
        // onOpenNotification(notification.data, remoteMessage);
        console.log('[LocalNotificationService] onNotification:', notification);
        if (!notification?.data) {
          return;
        }
        notification.userInteraction = true;
        onOpenNotification(notification.data, remoteMessage);

        if (Platform.OS === 'ios') {
          // (required) Called when a remote is received or opened, or local notification is opened
          notification.finish(PushNotificationIOS.FetchResult.NoData);
        }
      },

      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,

      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
  };

  unregister = () => {
    PushNotification.unregister();
  };

  showNotification = (id, title, message, data = {}, options = {}) => {
    console.log('[id]', id);
    console.log('[title]', title);
    console.log('[message]', message);
    console.log('[data]', data);
    PushNotification.localNotification({
      // / Android Only Properties /
      ...this.buildAndroidNotification(id, title, message, data, options),
      // / iOS and Android properties /
      ...this.buildIOSNotification(id, title, message, data, options),
      // / iOS and Android properties /
      title: title || '',
      message: message || '',
      playSound: options.playSound || false,
      soundName: options.soundName || 'default',
      channelId: 'Tabo-Customer',
      userInteraction: false, // BOOLEAN: If the notification was opened by the user from the notification area or not
    });
  };

  sendSummary = data => {
    const summary = new firebase.notifications.Notification()
      .setNotificationId(SUMMARY_ID)
      .setTitle(_T('notification.channels.alert.description'))
      .setData(data)
      .android.setAutoCancel(true)
      .android.setCategory(firebase.notifications.Android.Category.Message)
      .android.setChannelId(getChannelId(MsgType.Alert))
      .android.setColor(variables.scheme.primaryColor)
      .android.setSmallIcon(STATUS_ICON)
      .android.setGroup(ALERTS_GROUP)
      .android.setGroupSummary(true)
      .android.setGroupAlertBehaviour(
        firebase.notifications.Android.GroupAlert.Children,
      );
    sendIt(summary);
  };

  buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
    return {
      id: id,
      autoCancel: true,
      largeIcon: options.largeIcon || 'ic_launcher',
      smallIcon: options.smallIcon || 'ic_notification',
      bigText: message || '',
      ignoreInForeground: false,
      subText: title || '',
      vibrate: options.vibrate || true,
      vibration: options.vibration || 300,
      priority: options.priority || 'high',
      importance: options.importance || 'high', // (optional) set notification importance, default: high,
      data: data,
      tag: 'Tabo', // (optional) add tag to message
      group: 'Tabo', // (optional) add group to message
      groupSummary: false, // (optional) set this notification to be the group summary for a group of notifications, default: false
    };
  };

  buildIOSNotification = (id, title, message, data = {}, options = {}) => {
    return {
      alertAction: options.alertAction || 'view',
      category: options.category || '',
      userInfo: {
        id: id,
        item: data,
      },
    };
  };

  cancelAllLocalNotifications = () => {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.removeAllDeliveredNotifications();
    } else {
      PushNotification.cancelAllLocalNotifications();
    }
  };

  removeDeliveredNotificationByID = notificationId => {
    console.log(
      '[LocalNotificationService] removeDeliveredNotificationByID: ',
      notificationId,
    );
    PushNotification.cancelLocalNotifications({id: `${notificationId}`});
  };
}

export const localNotificationService = new LocalNotificationService();

// import PushNotification, {Importance} from "react-native-push-notification";
// import PushNotificationIOS from "@react-native-community/push-notification-ios";
// import {Platform} from "react-native";

// // ID for grouping notifications, always the same
// const SUMMARY_ID = `Tabo-Customer-Summary`;
// export const POPUP_CHANNEL_ID = "tabo-customer";
// export const SILENT_CHANNEL_ID = "tabo-customer-silent";

// class LocalNotificationService {
//  configure = (onOpenNotification, remoteMessage) => {
//   PushNotification.configure({
//    onRegister: function (token) {},
//    onNotification: function (notification) {
//     // if (!notification?.data) {
//     //  return;
//     // }
//     // notification.userInteraction = true;
//     // onOpenNotification(notification.data, remoteMessage);
//     console.log("[LocalNotificationService] onNotification:", notification);
//     if (!notification?.data) {
//      return;
//     }
//     notification.userInteraction = true;
//     onOpenNotification(notification?.data, remoteMessage);

//     if (Platform.OS === "ios") {
//      // (required) Called when a remote is received or opened, or local notification is opened
//      notification.finish(PushNotificationIOS.FetchResult?.NoData);
//     }
//    },

//    // IOS ONLY (optional): default: all - Permissions to register.
//    permissions: {
//     alert: true,
//     badge: true,
//     sound: true,
//    },

//    // Should the initial notification be popped automatically
//    // default: true
//    popInitialNotification: true,

//    /**
//     * (optional) default: true
//     * - Specified if permissions (ios) and token (android and ios) will requested or not,
//     * - if not, you must call PushNotificationsHandler.requestPermissions() later
//     * - if you are not using remote notification or do not have Firebase installed, use this:
//     *     requestPermissions: Platform.OS === 'ios'
//     */
//    requestPermissions: true,
//   });
//  };

//  unregister = () => {
//   PushNotification.unregister();
//  };

//  showNotification = (id, title, message, data = {}, options = {}) => {
//   PushNotification.localNotification({
//    // / Android Only Properties /
//    ...this.buildAndroidNotification(id, title, message, data, options),
//    // / iOS and Android properties /
//    ...this.buildIOSNotification(id, title, message, data, options),
//    // / iOS and Android properties /
//    title: title || "",
//    message: message || "",
//    playSound: options.playSound || false,
//    soundName: options.soundName || "default",
//    userInteraction: false, // BOOLEAN: If the notification was opened by the user from the notification area or not
//   });
//  };

//  groupNotifications = (channelId = SILENT_CHANNEL_ID) => {
//   PushNotification.localNotification({
//    /* Android Only Properties */
//    autoCancel: true,
//    smallIcon: "ic_notification",
//    group: "tabo-group",
//    channelId: channelId, // <- ASSIGN SILENT CHANNEL CREATED
//    groupSummary: true, // <- REQUIRED IN GROUP SUMMARY NOTIFICATION

//    /* iOS and Android properties */
//    id: 1, // REQUIRED, HAS TO BE A NUMBER
//    message: "", //REQUIRED
//   });
//  };

//   sendSummary = (data) => {
//    if (data) {
//     const summary = new firebase.notifications.Notification()
//      .setNotificationId(SUMMARY_ID)
//      .setTitle(_T("notification.channels.alert.description"))
//      .setData(data)
//      .android.setAutoCancel(true)
//      .android.setCategory(firebase.notifications.Android.Category.Message)
//      .android.setChannelId(getChannelId(MsgType.Alert))
//      .android.setColor(variables.scheme.primaryColor)
//      .android.setSmallIcon(STATUS_ICON)
//      .android.setGroup(ALERTS_GROUP)
//      .android.setGroupSummary(true)
//      .android.setGroupAlertBehaviour(
//       firebase.notifications.Android.GroupAlert.Children
//      );
//     sendIt(summary);
//    }
//   };

//  buildAndroidNotification = (id, title, message, data = {}, options = {}) => {
//   return {
//    //    id: id,
//    channelId: POPUP_CHANNEL_ID,
//    autoCancel: true,
//    largeIcon: options.largeIcon || "ic_launcher",
//    smallIcon: options.smallIcon || "ic_notification",
//    bigText: message || "",
//    ignoreInForeground: false,
//    subText: title || "",
//    vibrate: options.vibrate || true,
//    vibration: options.vibration || 300,
//    priority: options.priority || "high",
//    importance: options.importance || "high", // (optional) set notification importance, default: high,
//    data: data,
//    tag: "tabo", // (optional) add tag to message
//    group: "tabo-group", // (optional) add group to message
//   };
//  };

//  buildIOSNotification = (id, title, message, data = {}, options = {}) => {
//   return {
//    //  id: id,
//    alertAction: options.alertAction || "view",
//    category: options.category || "",
//    userInfo: {
//     id: id,
//     item: data,
//    },
//   };
//  };

//  cancelAllLocalNotifications = () => {
//   if (Platform.OS === "ios") {
//    PushNotificationIOS.removeAllDeliveredNotifications();
//   } else {
//    PushNotification.cancelAllLocalNotifications();
//   }
//  };

//  removeDeliveredNotificationByID = (notificationId) => {
//   console.log(
//    "[LocalNotificationService] removeDeliveredNotificationByID: ",
//    notificationId
//   );
//   PushNotification.cancelLocalNotifications({id: `${notificationId}`});
//  };
// }

// export const localNotificationService = new LocalNotificationService();
