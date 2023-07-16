import React from 'react';
import { LoginScreen } from '../screens/LoginScreen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { RegistrationScreen } from '../screens/RegistrationScreen/RegistrationScreen';

const Stack = createStackNavigator();

export const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitleAlign: 'center' }}>
        <Stack.Screen name={'LoginScreen'} component={LoginScreen} />
        <Stack.Screen name={'RegistrationScreen'} component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
