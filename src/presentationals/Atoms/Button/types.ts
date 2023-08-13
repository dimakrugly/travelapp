import {TextStyle, ViewStyle} from 'react-native';
export interface ButtonProps {
  title: string;
  onPress: () => void;
  isLoading?: boolean;
  disabled?: boolean;
}

export interface ButtonStyles {
  container: ViewStyle;
  button: ViewStyle;
  title: TextStyle;
}
