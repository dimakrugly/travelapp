import { Text, View } from 'react-native';
import React from 'react';
import { AppButton } from '../../presentationals/Atoms/Button';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../store/reducers/user/userReducer';

export const ProfileScreen: React.FC = () => {

  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(clearUser());
  };

  return (
      <View>
        <Text>ПИШОВ НА ХУЙ РАЗОМ СО СВОЙИМ ТЕЛЕКАНАЛОМ</Text>
        <AppButton onPress={logOut} title="LOGOUT" />
     </View>
  );
};