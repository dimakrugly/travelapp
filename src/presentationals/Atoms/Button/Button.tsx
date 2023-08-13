import {TouchableOpacity, View, Text, ActivityIndicator} from 'react-native';
import React from 'react';
import {ButtonProps} from './types';
import {styles} from './styles';

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  isLoading,
  disabled,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        disabled={disabled}>
        {isLoading ? (
          <ActivityIndicator size="small" color="#ffffff" />
        ) : (
          <Text style={styles.title}>{title}</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};
