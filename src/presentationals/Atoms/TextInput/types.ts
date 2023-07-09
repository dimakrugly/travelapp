import { TextStyle } from 'react-native';

export interface InputProps {
  placeholder: string,
  onChange: ()=> void,
}

export interface InputStyles {
  input: TextStyle;
}
