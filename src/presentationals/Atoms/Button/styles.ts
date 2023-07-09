import { StyleSheet } from 'react-native';
import { ButtonStyles } from './types';



export const styles  = StyleSheet.create<ButtonStyles>({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 15,
    height: 48,
    width: '100%',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
  },
});
