import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormValues } from '../../LoginScreen/hooks/types';

export const useRegistration = () => {


  const navigation = useNavigation<any>();
  const onNavigationPress = useCallback(()=>{
    navigation.navigate('LoginScreen');
  }, []);

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
      lastName: '',
      firstName: '',
      age: '',
    },
  });

  const onSubmit = (data: { email: string, password: string, firstName: string }) => {
    console.log(data.firstName);
  };

  
  return {
    onNavigationPress,
    control,
    handleSubmit,
    errors,
    onSubmit,
  };
};
