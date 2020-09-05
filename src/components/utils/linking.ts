import { Linking } from 'react-native';

export const openURL = (url: string) =>
  Linking.canOpenURL(url).then((supported) => {
    if (supported) {
      Linking.openURL(url);
    } else {
      throw new Error("Don't know how to open URI: " + url);
    }
  });
