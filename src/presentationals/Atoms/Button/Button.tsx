import {TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import { ButtonProps } from './types';
import { styles } from './styles';

export const AppButton: React.FC<ButtonProps> = ({ title, onPress, isLoading }) => {
  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.button}  onPress={onPress} >
          {isLoading ? (
              <ActivityIndicator size="small" color="#ffffff" />
          ) : (
              <Text style={styles.title}>{title}</Text>
          )}
      </TouchableOpacity>
    </View>
  );
};
