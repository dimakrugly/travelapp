import {TextStyle} from 'react-native';

export interface InputProps {
  placeholder: string;
  onChange: (value: string) => void;
  onBlur: () => void;
  value: string;
  password: boolean;
}

export interface InputStyles {
  input: TextStyle;
}
