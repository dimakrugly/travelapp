import { TextStyle, ViewStyle } from 'react-native';
import { Control, FieldErrors } from 'react-hook-form';

export type RegistrationFormValues = {
  email: string;
  password: string;
  passwordConfirm: string;
  firstName: string,
  lastName: string,
  age: number,
};

type OnSubmitType = () => void;


export interface RegisterTemplateProps {
  onNavigationPress: ()=>void,
  handleSubmit: (onSubmit: OnSubmitType)=>void,
  errors: FieldErrors<RegistrationFormValues>,
  onSubmit: any,
  control: Control<RegistrationFormValues>,
  isLoading: boolean,
  validateAge: ()=>{},
}

export interface RegisterTemplateStyles {
  textArea: ViewStyle,
  inputWrapper: ViewStyle,
  errors: TextStyle,
  inputField: ViewStyle,
}
