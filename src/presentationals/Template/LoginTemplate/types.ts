import { ImageStyle, ViewStyle } from 'react-native';

export interface LoginTemplateProps {
  onNavigationPress: ()=>void,
}

export interface LoginTemplateStyles {
  loginImage: ImageStyle,
  inputWrapper: ViewStyle,
  inputContainer: ViewStyle,
  buttonContainer: ViewStyle,
  registerContainer: ViewStyle,
}
