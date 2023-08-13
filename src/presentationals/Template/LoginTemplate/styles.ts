import {StyleSheet} from 'react-native';
import {LoginTemplateStyles} from './types';

export const styles = StyleSheet.create<LoginTemplateStyles>({
  keyBoardContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  loginImage: {
    width: 'auto',
    flex: 1,
    backgroundColor: 'white',
  },
  inputWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 120,
    backgroundColor: '#fff',
  },
  inputContainer: {
    paddingTop: 25,
  },
  buttonContainer: {
    marginTop: 25,
  },
  registerContainer: {
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errors: {
    color: 'red',
    position: 'absolute',
    bottom: -20,
    alignSelf: 'center',
  },
});
