import {Text, View} from 'react-native';
import React from 'react';
import {Button} from '../../presentationals/Atoms/Button';
import {useDispatch} from 'react-redux';
import {clearUser} from '../../store/reducers/user/userReducer';

export const ProfileScreen: React.FC = () => {
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(clearUser());
  };

  return (
    <View>
      <Text>ProfilePage</Text>
      <Button onPress={logOut} title="LOGOUT" />
    </View>
  );
};
