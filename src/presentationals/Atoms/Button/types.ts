import { TextStyle, ViewStyle } from 'react-native';
export interface ButtonProps {
  title: string,
  onPress: ()=>void,
  isLoading: boolean,
}

export interface ButtonStyles {
  container: ViewStyle,
  button: ViewStyle,
  title: TextStyle,
}
