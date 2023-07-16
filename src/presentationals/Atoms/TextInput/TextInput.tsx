import { TextInput } from 'react-native';
import React from 'react';
import { styles } from './styles';
import { InputProps } from './types';


export const Input: React.FC<InputProps> = ({ placeholder, onChange, onBlur, value, password = false }) => {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      onChangeText={onChange}
      onBlur={onBlur}
      value={value}
      secureTextEntry={password}
      />
  );
};
