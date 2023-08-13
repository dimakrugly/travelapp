import {useNavigation} from '@react-navigation/native';
import {useCallback} from 'react';
import {useForm} from 'react-hook-form';
import {RegistrationFormValues} from '../../../presentationals/Template/RegistrationTemplate/types';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch} from '../../../store/store';
import {authRegistration} from '../../../store/reducers/user/actions/authRegistration';
import {
  selectIsAuth,
  selectLoader,
} from '../../../store/reducers/user/selector';

export const useRegistration = () => {
  const isAuth = useSelector(selectIsAuth);

  const dispatch = useDispatch<AppDispatch>();

  const navigation = useNavigation<any>();

  const onNavigationPress = useCallback(() => {
    navigation.navigate('LoginScreen');
  }, [navigation]);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<RegistrationFormValues>({
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
      lastName: '',
      firstName: '',
      age: 15,
    },
  });

  const onSubmitFetch = (data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    passwordConfirm: string;
  }) => {
    dispatch(
      authRegistration({
        firstName: data.firstName,
        lastName: data.lastName,
        age: 32,
        email: data.email,
        password: data.password,
        passwordConfirm: data.passwordConfirm,
      }),
    );
  };

  const onSubmit = useCallback(() => {
    handleSubmit(onSubmitFetch)();
  }, []);

  const isLoading = useSelector(selectLoader);

  return {
    onNavigationPress,
    control,
    handleSubmit,
    errors,
    onSubmit,
    isLoading,
    isAuth,
  };
};
