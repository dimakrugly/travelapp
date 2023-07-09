import React from 'react';
import { LoginTemplate } from '../../presentationals';
import { useLogin } from './hooks';

export const LoginScreen: React.FC = () => {
  const { onNavigationPress, control, handleSubmit, formState: { errors }, onSubmit } = useLogin();


  return (
    <LoginTemplate
      onNavigationPress={onNavigationPress}
      control={control}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
      errors={errors}
    />
  );
};
