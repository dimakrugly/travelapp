import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {useDispatch, useSelector} from 'react-redux';
import {authLogin} from '../../../store/reducers/user/actions/authLogin';
import {AppDispatch} from '../../../store/store';
import {selectLoader} from '../../../store/reducers/user/selector';
import {FormValues} from '../../../presentationals/Template/LoginTemplate/types';

export const useLogin = () => {
  const dispatch = useDispatch<AppDispatch>();

  const navigation = useNavigation<any>();
  const onNavigationPress = useCallback(() => {
    navigation.navigate('RegistrationScreen');
  }, []);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmitFetch = useCallback(
    (data: {email: string; password: string}) => {
      dispatch(
        authLogin({
          email: data.email,
          password: data.password,
        }),
      );
    },
    [dispatch],
  );

  const onSubmit = useCallback(() => {
    handleSubmit(onSubmitFetch)();
  }, [handleSubmit, onSubmitFetch]);

  const isLoading = useSelector(selectLoader);

  return {onNavigationPress, control, errors, onSubmit, isLoading};
};
