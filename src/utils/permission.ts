import { PermissionsAndroid, Platform, Alert } from 'react-native';

export const requestMicrophonePermission = async (): Promise<boolean> => {
  if (Platform.OS === 'android') {
    try {
      // Check if permission is already granted
      const hasPermission = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      );
      if (hasPermission) {
        return true;
      }

      // Request permission if not granted
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        {
          title: 'Microphone Permission',
          message: 'This app needs access to your microphone to record audio.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        showPermissionDeniedAlert();
        return false;
      }
    } catch (err) {
      return false;
    }
  } else {
    return true; // Assume granted for simplicity in iOS
  }
};

export const showPermissionDeniedAlert = () => {
  Alert.alert(
    'Permission Denied',
    'You need to grant microphone permission to use this feature. Please enable it in the app settings.',
    [
      { text: 'Cancel', style: 'cancel' },
    ],
  );
};
