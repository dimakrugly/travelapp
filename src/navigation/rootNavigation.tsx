import React from 'react';
import { LoginScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistrationScreen } from '../screens/RegistrationScreen/RegistrationScreen';
import { ProfileScreen } from '../screens/ProfileScreen/ProfileScreen';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../store/reducers/user/selector';

const Stack = createStackNavigator();

export const RootNavigation = () => {
    
  const isAuth = useSelector(selectIsAuth);
    
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          { !isAuth ?
              <>
              <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
              <Stack.Screen name={'RegistrationScreen'} component={RegistrationScreen} />
              </>
            :
              <Stack.Screen name={'ProfileScreen'} component={ProfileScreen} />
          }
        
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};
