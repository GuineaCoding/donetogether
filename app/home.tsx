import { View, Text, Button, Alert } from 'react-native';
import { useAuth } from '../providers/AuthProvider';
import * as Notifications from 'expo-notifications';
import { useEffect } from 'react';
import { getMessaging, getToken } from '@react-native-firebase/messaging';

// Configure notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});

export default function Home() {
  const { user, logout } = useAuth();

  useEffect(() => {
    registerForPushNotifications();
    setupNotificationListeners();
  }, []);

  async function registerForPushNotifications() {
    try {
      // Request permissions
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission denied', 'You need to enable notifications in settings!');
        return;
      }

      // Get Expo push token
      const expoToken = (await Notifications.getExpoPushTokenAsync()).data;
      console.log('Expo Push Token:', expoToken);

      // Get FCM token (for Android)
      const fcmToken = await getToken(getMessaging());
      console.log('FCM Token:', fcmToken);

      // Send tokens to your backend
      await savePushTokens(user.uid, { expoToken, fcmToken });

    } catch (error) {
      console.error('Push notification registration failed:', error);
    }
  }

  function setupNotificationListeners() {
    // Foreground notifications
    const subscription = Notifications.addNotificationReceivedListener(notification => {
      console.log('Notification received:', notification);
    });

    // Background/quit notifications
    Notifications.addNotificationResponseReceivedListener(response => {
      console.log('Notification tapped:', response);
    });

    return () => subscription.remove();
  }

  async function sendTestNotification() {
    try {
      // For testing, we'll use the Expo push service
      await Notifications.scheduleNotificationAsync({
        content: {
          title: 'Test Notification',
          body: 'Hello from DoneTogether!',
        },
        trigger: null, // Send immediately
      });
    } catch (error) {
      console.error('Failed to send test notification:', error);
    }
  }

  return (
    <View>
      <Text>Welcome {user?.email}</Text>
      <Button title="Send Test Notification" onPress={sendTestNotification} />
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

// Helper function to save tokens to your backend
async function savePushTokens(userId, { expoToken, fcmToken }) {
  // Implement your API call here
  console.log('Saving tokens for user:', userId, { expoToken, fcmToken });
}