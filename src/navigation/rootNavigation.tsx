import React from 'react';
import { LoginScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistrationScreen } from '../screens/RegistrationScreen/RegistrationScreen';
import { useSelector } from 'react-redux';
import { selectIsAuth } from '../store/reducers/user/selector';
import { BottomScreenNavigator } from './BottomScreenNavigation';

const Stack = createStackNavigator();


export const RootNavigation = () => {

  const isAuth = useSelector(selectIsAuth);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
          { !isAuth ?
              <>
              <Stack.Screen name={'LoginScreen'} component={LoginScreen} options={{ headerShown: false }}/>
              <Stack.Screen name={'RegistrationScreen'} component={RegistrationScreen} options={{ headerShown: false }} />
              </>
            :
              <Stack.Screen name="AuthenticatedScreens" component={BottomScreenNavigator} options={{ headerShown: false }}/>
          }
      </Stack.Navigator>
    </NavigationContainer>
  );
};

