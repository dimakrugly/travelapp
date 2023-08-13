import React from 'react';
import {TextInput, View} from 'react-native';
import {TextAreaProps} from './types';
import {styles} from './styles';

export const TextArea: React.FC<TextAreaProps> = ({
  placeholder = 'Enter Text',
  lines = 1,
  onChange,
  text,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        placeholder={placeholder}
        multiline={true}
        numberOfLines={lines}
        onChangeText={onChange}
      />
    </View>
  );
};
