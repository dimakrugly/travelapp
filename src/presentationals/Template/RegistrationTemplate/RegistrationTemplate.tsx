import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Input } from '../../Atoms/TextInput';
import { RegisterTemplateProps } from './types';

export const RegistrationTemplate = memo<RegisterTemplateProps>(({
  onNavigationPress,
}) => {
  return (
      <View style={styles.textArea}>
        <Text>Register</Text>
        <View style={styles.inputWrapper}>
          <Input onChange={()=>{}} placeholder='First Name'></Input>
        </View>
          <TouchableOpacity onPress={onNavigationPress}>
              <Text>Have an account? Log in</Text>
          </TouchableOpacity>
      </View>
  );
},
);

