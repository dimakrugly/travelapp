import { StyleSheet } from 'react-native';
import { LoginTemplateStyles } from './types';

export const styles  = StyleSheet.create<LoginTemplateStyles>({
  loginImage: {
    width: 'auto',
    height: '50%',
    backgroundColor: 'white',
  },
  inputWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 120,
    backgroundColor: '#fff',
  },
  inputContainer: {
    paddingTop: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
  registerContainer: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
