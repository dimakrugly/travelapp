import { TouchableOpacity, View, Text } from 'react-native';
import React from 'react';
import { ButtonProps } from './types';
import { styles } from './styles';


export const AppButton: React.FC<ButtonProps> = ({ title, onPress }) => {
  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.button}  onPress={onPress} >
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
