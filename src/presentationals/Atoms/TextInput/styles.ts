import {StyleSheet} from 'react-native';
import {InputStyles} from './types';

export const styles = StyleSheet.create<InputStyles>({
  input: {
    height: 48,
    width: '100%',
    borderColor: 'lightgray',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 4,
    backgroundColor: '#fff',
  },
});
