import React, { memo } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { LoginTemplateProps } from './types';
import { styles } from './styles';
import { Input } from '../../Atoms/TextInput';

export const LoginTemplate = memo<LoginTemplateProps>(({ onNavigationPress }) => {

  return (
    <View>
      <Image
        style={styles.loginImage}
        source={require('../../../assets/images/loginScreen.jpg')}></Image>
      <View>
        <View style={styles.inputWrapper}>
          <Input
            placeholder="Email"
          />
          <View style={styles.inputContainer}>
             <Input
            placeholder="Password"
            />
          </View>

        </View>
      </View>
      <TouchableOpacity onPress={onNavigationPress}>
        <Text>Navigation to registration</Text>
      </TouchableOpacity>
    </View>
  );
},
);

