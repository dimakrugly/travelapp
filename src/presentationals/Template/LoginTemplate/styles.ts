import { StyleSheet } from 'react-native';
import { LoginTemplateStyles } from './types';

export const styles  = StyleSheet.create<LoginTemplateStyles>({
  loginImage: {
    width: 'auto',
    height: '50%',
  },
  inputWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 80,
  },
  inputContainer: {
    paddingTop: 20,
  },
});
