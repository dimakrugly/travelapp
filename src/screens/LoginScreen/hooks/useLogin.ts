import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FormValues } from './types';
import { useDispatch, useSelector } from 'react-redux';
import { authLogin } from '../../../store/reducers/user/action';
import { AppDispatch } from '../../../store/store';
import {selectLoader, selectUser} from '../../../store/reducers/user/selector';

export const useLogin = () => {
  const dispatch  = useDispatch<AppDispatch>();

  const navigation = useNavigation<any>();
  const onNavigationPress = useCallback(()=>{
    navigation.navigate('RegistrationScreen');
  }, []);

  const { control, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitFetch = (data: { email: string, password: string }) => {
    dispatch(authLogin({
      email: data.email,
      password: data.password,
    }));
  };

  const onSubmit = useCallback(()=>{
    handleSubmit(onSubmitFetch)();
  }, []);


  const isLoading = useSelector(selectLoader);
 console.log('LOADING', isLoading);

  return { onNavigationPress, control, handleSubmit, errors, onSubmit, isLoading };
};
