import React from 'react';
import {Image} from 'react-native';
import {ProfileScreen} from '../screens/ProfileScreen/ProfileScreen';
import {MapScreen} from '../screens/MapScreen/MapScreen';
import {OptionsScreen} from '../screens/OptionsScreen/OptionsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();
export const BottomScreenNavigator: React.FC = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={{width: 25, height: 25}}
              source={require('../assets/images/NAV_PROFILE.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Image
              style={{width: 25, height: 25}}
              source={require('../assets/images/NAV_MAP.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Options"
        component={OptionsScreen}
        options={{
          tabBarIcon: () => (
            <Image
              style={{width: 25, height: 25}}
              source={require('../assets/images/NAV_GEAR.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
