import { TextStyle, ViewStyle } from 'react-native';
import { Control, FieldErrors } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
  firstName: string,
  lastName: string,
  age: number,
};

type OnSubmitType = () => void;


export interface RegisterTemplateProps {
  onNavigationPress: ()=>void,
  handleSubmit: (onSubmit: OnSubmitType)=>void,
  errors: FieldErrors<FormValues>,
  onSubmit: OnSubmitType,
  control: Control<FormValues>,
  isLoading: boolean,
}

export interface RegisterTemplateStyles {
  textArea: ViewStyle,
  inputWrapper: ViewStyle,
  errors: TextStyle,
  inputField: ViewStyle,
}
