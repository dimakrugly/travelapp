import React from 'react';
import {RegistrationTemplate} from '../../presentationals/Template/RegistrationTemplate/RegistrationTemplate';
import {useRegistration} from './hooks/useRegistration';

export const RegistrationScreen: React.FC = () => {
  const useRegistrationProps = useRegistration();

  return <RegistrationTemplate {...useRegistrationProps} />;
};
