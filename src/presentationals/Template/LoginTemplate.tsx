import React, { memo } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { LoginTemplateProps } from './types';

export const LoginTemplate = memo<LoginTemplateProps>(({ onNavigationPress }) => {
  return (
    <View>
      <TouchableOpacity onPress={onNavigationPress}>
        <Text>Navigation to registration</Text>
      </TouchableOpacity>
    </View>
  );
},
);
