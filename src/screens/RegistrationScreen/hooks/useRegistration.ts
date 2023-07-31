import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { RegistrationFormValues } from '../../../presentationals/Template/RegistrationTemplate/types';
import { authLogin } from '../../../store/reducers/user/actions/authLogin';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../store/store';
import {authRegistration} from "../../../store/reducers/user/actions/authRegistration";

export const useRegistration = () => {
  
  const dispatch  = useDispatch<AppDispatch>();
  
  const navigation = useNavigation<any>();
  const onNavigationPress = useCallback(()=>{
    navigation.navigate('LoginScreen');
  }, []);

  const { control, handleSubmit, formState: { errors } } = useForm<RegistrationFormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      lastName: '',
      firstName: '',
      age: 15,
    },
  });

  const validateAge = (value: any) => {
    const currentDate = new Date();
    const selectedDate = new Date(value);
    const ageDiff = currentDate.getFullYear() - selectedDate.getFullYear();

    return ageDiff >= 14 || 'Вы должны быть старше 14 лет';
  };

  const onSubmitFetch = (data: { firstName: string, lastName: string, email: string, password: string, passwordConfirm: string }) => {
    dispatch(authRegistration({
      firstName: data.firstName,
      lastName: data.lastName,
      age: 32,
      email: data.email,
      password: data.password,
      passwordConfirm: data.passwordConfirm,
    }));
  };

  const onSubmit = useCallback(()=>{
    handleSubmit(onSubmitFetch)();
  }, []);


  return {
    onNavigationPress,
    control,
    handleSubmit,
    errors,
    onSubmit,
    validateAge,
  };
};
