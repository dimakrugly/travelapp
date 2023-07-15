import { ImageStyle, ViewStyle } from 'react-native';
import { Control, FieldErrors } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};

type OnSubmitType = () => void;

export interface LoginTemplateProps {
  onNavigationPress: ()=>void,
  handleSubmit: (onSubmit: OnSubmitType)=>void,
  errors: FieldErrors<FormValues>,
  onSubmit: OnSubmitType,
  control: Control<FormValues>
}

export interface LoginTemplateStyles {
  keyBoardContainer: ViewStyle,
  loginImage: ImageStyle,
  inputWrapper: ViewStyle,
  inputContainer: ViewStyle,
  buttonContainer: ViewStyle,
  registerContainer: ViewStyle,
  errors: ViewStyle,
}
