import { useNavigation } from '@react-navigation/native';
import { useCallback } from 'react';

export const useRegistration = () => {


  const navigation = useNavigation<any>();
  const onNavigationPress = useCallback(()=>{
    navigation.navigate('LoginScreen');
  }, []);
    
  return {
    onNavigationPress,
  };
};
