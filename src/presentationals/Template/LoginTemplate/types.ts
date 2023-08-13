import {ImageStyle, ViewStyle} from 'react-native';
import {Control, FieldErrors} from 'react-hook-form';

export type FormValues = {
  email: string;
  password: string;
};

type OnSubmitType = () => void;

export interface LoginTemplateProps {
  onNavigationPress: () => void;
  errors: FieldErrors<FormValues>;
  onSubmit: OnSubmitType;
  control: Control<FormValues>;
  isLoading: boolean;
}

export interface LoginTemplateStyles {
  keyBoardContainer: ViewStyle;
  loginImage: ImageStyle;
  inputWrapper: ViewStyle;
  inputContainer: ViewStyle;
  buttonContainer: ViewStyle;
  registerContainer: ViewStyle;
  errors: ViewStyle;
}
