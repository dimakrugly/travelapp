import React from 'react';
import { LoginTemplate } from '../../presentationals';
import { useLogin } from './hooks';

export const LoginScreen: React.FC = () => {
  const useLoginProps = useLogin();

  return (
    <LoginTemplate
      {...useLoginProps}
    />
  );
};

