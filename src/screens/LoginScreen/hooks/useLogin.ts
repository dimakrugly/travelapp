import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormValues } from './types';
import axios from 'axios';

export const useLogin = () => {

  const API_URL = process.env.API_URL;

  const navigation = useNavigation<any>();
  const onNavigationPress = useCallback(()=>{
    navigation.navigate('RegistrationScreen');
  }, []);

  const { control, handleSubmit, formState: { errors, email, password } } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });


  const onSubmit = (data) => {
    const requestData = {
      email: data.email,
      password: data.password,
    };

    axios
      .post('https://nest-ln8n-oleksiizhukatt.vercel.app/auth/login', requestData)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return { onNavigationPress, control, handleSubmit, formState: { errors }, onSubmit };
};
