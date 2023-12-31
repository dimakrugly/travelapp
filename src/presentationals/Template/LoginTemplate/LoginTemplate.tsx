import React, {memo} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from 'react-native';
import {LoginTemplateProps} from './types';
import {styles} from './styles';
import {Input} from '../../Atoms/TextInput';
import {Button} from '../../Atoms/Button';
import {Controller} from 'react-hook-form';

export const LoginTemplate = memo<LoginTemplateProps>(
  ({onNavigationPress, control, onSubmit, errors, isLoading}) => {
    return (
      <ImageBackground
        source={require('../../../assets/images/LOGIN_BG.jpg')}
        style={{
          flex: 1,
        }}>
        <KeyboardAvoidingView
          style={styles.keyBoardContainer}
          behavior="padding">
          <View style={styles.loginImage} />
          <View>
            <View style={styles.inputWrapper}>
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <View>
                    <Input
                      placeholder="Email"
                      onChange={v => onChange(v)}
                      onBlur={onBlur}
                      value={value}
                      password={false}
                    />
                    {errors?.email && (
                      <Text style={styles.errors}>{errors.email.message}</Text>
                    )}
                  </View>
                )}
                name="email"
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
                  render={({field: {onChange, onBlur, value}}) => (
                    <Input
                      placeholder="Password"
                      onChange={v => onChange(v)}
                      onBlur={onBlur}
                      value={value}
                      password={true}
                    />
                  )}
                  name="password"
                  rules={{
                    required: true,
                    pattern: {
                      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                      message: 'Invalid password format',
                    },
                  }}
                />
                {errors?.password && (
                  <Text style={styles.errors}>{errors.password.message}</Text>
                )}
              </View>
              <View style={styles.buttonContainer}>
                <Button
                  title="Login"
                  onPress={onSubmit}
                  isLoading={isLoading}
                  disabled={isLoading}
                />
              </View>
            </View>
          </View>
          <View style={styles.registerContainer}>
            <TouchableOpacity onPress={onNavigationPress}>
              <Text>Don't have an account? Register</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ImageBackground>
    );
  },
);
