import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

export const useLogin = () => {
  const navigation = useNavigation<any>();
  const onNavigationPress = useCallback(()=>{
    navigation.navigate('RegistrationScreen');
  }, []);
  return { onNavigationPress };
};
