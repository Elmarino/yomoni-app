import { Dimensions, Platform } from 'react-native';

export const isWebAndLargeScreen =
  Platform.OS === 'web' && Dimensions.get('window').width > 998;

export const isMobile = Platform.OS === 'ios' || Platform.OS === 'android';
