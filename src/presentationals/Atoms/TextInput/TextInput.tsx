import { TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';

export const Input: React.FC<any> = ({ placeholder, onChange }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
    ></TextInput>
  );
};
