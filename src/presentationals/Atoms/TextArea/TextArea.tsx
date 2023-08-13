import React, {useState} from 'react';
import {Keyboard, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {TextAreaProps} from './types';
import {styles} from './styles';
import {useSelector} from 'react-redux';
import {selectCurrentPin} from '../../../store/reducers/pins/selector';
export const TextArea: React.FC<TextAreaProps> = ({
  placeholder,
  lines,
  onChange,
}) => {
  const [text, setText] = useState('');
  const data = useSelector(selectCurrentPin);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={newText => setText(newText)}
        placeholder={placeholder}
        multiline={true}
        numberOfLines={lines}
        onChange={onChange}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Keyboard.dismiss();
        }}>
        <Text style={{color: 'green'}}>DONE</Text>
      </TouchableOpacity>
    </View>
  );
};
