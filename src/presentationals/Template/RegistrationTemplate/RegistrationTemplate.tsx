import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { Input } from '../../Atoms/TextInput';
import { RegisterTemplateProps } from './types';
import { Controller } from 'react-hook-form';
import { AppButton } from '../../Atoms/Button';

export const RegistrationTemplate = memo<RegisterTemplateProps>(({
  onNavigationPress,
  control,
  errors,
  onSubmit,
  isLoading,
}) => {
  return (
      <View style={styles.textArea}>
        <Text>Register</Text>
        <View style={styles.inputWrapper}>
            <View style={styles.inputField}>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <Input
                                placeholder="First Name"
                                onChange={(v) => onChange(v)}
                                onBlur={onBlur}
                                value={value}
                                password={false}
                            />
                            {errors?.firstName && (
                                <Text style={styles.errors}>{errors.firstName.message}</Text>
                            )}
                        </View>

                    )}
                    name='firstName'
                    rules={{
                      required: true,
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: 'Enter correct name',
                      },
                    }}
                />
            </View>
            <View style={styles.inputField}>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <Input
                                placeholder="Last Name"
                                onChange={(v) => onChange(v)}
                                onBlur={onBlur}
                                value={value}
                                password={false}
                            />
                            {errors?.lastName && (
                                <Text style={styles.errors}>{errors.lastName.message}</Text>
                            )}
                        </View>

                    )}
                    name='lastName'
                    rules={{
                      required: true,
                      pattern: {
                        value: /^[A-Za-z]+$/,
                        message: 'Enter correct name',
                      },
                    }}
                />
            </View>
            <View style={styles.inputField}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                    <Input
                        placeholder="Password"
                        onChange={(v) => onChange(v)}
                        onBlur={onBlur}
                        value={value}
                        password={true}
                    />
                        {errors?.password && (
                            <Text style={styles.errors}>{errors.password.message}</Text>
                        )}
                    </View>
                )}
                name="password"
                rules={{
                  required: true,
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                    message: 'Invalid password format',
                  },
                }}/>
            </View>
            <View style={styles.inputField}>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <View>
                            <Input
                                placeholder="Confirm password"
                                onChange={(v) => onChange(v)}
                                onBlur={onBlur}
                                value={value}
                                password={true}
                            />
                            {errors?.password && (
                                <Text style={styles.errors}>{errors.password.message}</Text>
                            )}
                        </View>
                    )}
                    name="passwordConfirm"
                    rules={{
                      required: true,
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*#?&]{8,}$/,
                        message: 'Invalid password format',
                      },
                    }}/>
            </View>
            <View style={styles.inputField}>
            <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <View>
                        <Input
                            placeholder="Email"
                            onChange={(v) => onChange(v)}
                            onBlur={onBlur}
                            value={value}
                            password={false}
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
            <View  style={styles.inputField}>
                <AppButton
                    title='Register'
                    onPress={onSubmit}
                    isLoading={isLoading}
                    disabled={isLoading}
                />
            </View>
        </View>
    <View  style={styles.inputField}>
        <TouchableOpacity onPress={onNavigationPress}>
        <Text>Have an account? Log in</Text>
        </TouchableOpacity>
    </View>


        </View>
      </View>
  );
},
);
