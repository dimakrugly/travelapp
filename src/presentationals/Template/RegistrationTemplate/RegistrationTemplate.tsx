import React, { memo } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Input } from '../../Atoms/TextInput';

export const RegistrationTemplate = memo<any>(() => {
  return (
      <View style={styles.textArea}>
        <Text>Register</Text>
        <View style={styles.inputWrapper}>
          <Input onChange={()=>{}} placeholder='kypba'></Input>
        </View>
      </View>
  );
},
);

