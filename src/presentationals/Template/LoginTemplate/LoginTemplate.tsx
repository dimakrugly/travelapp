import React, { memo } from 'react';
import { Text, View, TouchableOpacity, Image, KeyboardAvoidingView } from "react-native";
import { LoginTemplateProps } from './types';
import { styles } from './styles';
import { Input } from '../../Atoms/TextInput';
import { AppButton } from '../../Atoms/Button';
import { Controller } from 'react-hook-form';

export const LoginTemplate = memo<LoginTemplateProps>(({ onNavigationPress, control, onSubmit, errors }) => {
  return (
    <KeyboardAvoidingView style={styles.keyBoardContainer} behavior="padding">
      <Image
        style={styles.loginImage}
        source={require('../../../assets/images/logo2.png')}></Image>
      <View>
         <View style={styles.inputWrapper}>
           <Controller
             control={control}
             render={({ field: { onChange, onBlur, value } }) => (
               <View>
                 <Input
                   placeholder="Email"
                   onChange={(v) => onChange(v)}
                   onBlur={onBlur}
                   value={value}
                 />
                 {errors?.email && (
                   <Text style={styles.errors}>{errors.email.message}</Text>
                 )}
               </View>

             )}
             name='email'
             rules={{
               required: true,
               pattern: {
                 value: /^\S+@\S+$/i,
                 message: 'Invalid email format',
               },
             }}
           />
          <View style={styles.inputContainer}>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  placeholder="Password"
                  onChange={(v) => onChange(v)}
                  onBlur={onBlur}
                  value={value}
                />
              )}
              name="password"
              rules={{
                required: true,
                pattern: {
                  value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                  message: 'Invalid password format',
                },
              }}/>
            {errors?.password && (
              <Text style={styles.errors}>{errors.password.message}</Text>
            )}
          </View>
           <View style={styles.buttonContainer}>
             <AppButton
               title='Login' onPress={onSubmit}/>
           </View>
         </View>
      </View>
      <View style={styles.registerContainer}>
       <TouchableOpacity onPress={onNavigationPress}>
          <Text>Don't have an account? Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
},
);


