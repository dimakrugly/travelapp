import React, { memo } from 'react';
import { Text, View, TouchableOpacity, Image, Button } from 'react-native';
import { LoginTemplateProps } from './types';
import { styles } from './styles';
import { Input } from '../../Atoms/TextInput';
import { AppButton } from '../../Atoms/Button';

export const LoginTemplate = memo<LoginTemplateProps>(({ onNavigationPress }) => {

  return (
    <View>
      <Image
        style={styles.loginImage}
        source={require('../../../assets/images/logo2.png')}></Image>
      <View>
         <View style={styles.inputWrapper}>
          <Input
            placeholder="Email"
            onChange={()=>{}}/>
          <View style={styles.inputContainer}>
             <Input
            placeholder="Password"
            onChange={()=>{}}
            />
          </View>
           <View style={styles.buttonContainer}>
             <AppButton  title='Login' />
           </View>
         </View>
      </View>
      <View style={styles.registerContainer}>
       <TouchableOpacity onPress={onNavigationPress}>
          <Text>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
},
);

