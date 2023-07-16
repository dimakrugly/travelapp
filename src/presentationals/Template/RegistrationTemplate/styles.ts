import { StyleSheet } from 'react-native';
import { RegisterTemplateStyles } from './types';

export const styles  = StyleSheet.create<RegisterTemplateStyles>({
  textArea: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputWrapper: {
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: '#fff',
    width: '100%',
  },
  errors: {
    color: 'red',
    position: 'absolute',
    bottom: -20,
    alignSelf: 'center',
  },
  inputField: {
    padding: 10,
  },
});
