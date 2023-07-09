import { ImageStyle, ViewStyle } from 'react-native';

export interface LoginTemplateProps {
  onNavigationPress: ()=>void,
  handleSubmit: (onSubmit: () => {})=>{},
  errors: {
    email: {
      message: string
    },
    password: {
      message: string,
    }
  },
  onSubmit: ()=>{},
  onPress: ()=>{},
  control: any,
}

export interface LoginTemplateStyles {
  loginImage: ImageStyle,
  inputWrapper: ViewStyle,
  inputContainer: ViewStyle,
  buttonContainer: ViewStyle,
  registerContainer: ViewStyle,
  errors: ViewStyle,
}
