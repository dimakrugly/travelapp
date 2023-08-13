import {Image, View} from 'react-native';
import {styles} from './styles';
import React, {useCallback} from 'react';
import {TextArea} from '../../Atoms/TextArea/TextArea';
import {useDispatch, useSelector} from 'react-redux';
import {updatePinName} from '../../../store/reducers/pins/pinsReducer';
import {selectCurrentPin} from '../../../store/reducers/pins/selector';

export const MarkCard = () => {
  const dispatch = useDispatch();

  const data = useSelector(selectCurrentPin);
  console.log(data, 'DATA');

  const addName = useCallback(
    (id: any, name: any) => {
      dispatch(updatePinName({id: id, name: name}));
    },
    [dispatch],
  );

  // const addDesc = (id, description) => dispatch(updatePinDescription({ id: id, description: description } ));

  return (
    <View style={styles.viewFlex}>
      <TextArea
        placeholder="Enter Text"
        lines={1}
        onChange={(e: any) => {
          addName(data?.id, e.nativeEvent.text);
          console.log(data, 'KYPKA');
        }}
      />
      {/*<TextArea placeholder='Enter Description' lines={5}*/}
      {/*//           onChange={*/}
      {/*//     // (e: any) => {*/}
      {/*//     //   addDesc(data?.id, e.nativeEvent.text);*/}
      {/*//     // }*/}
      {/*//*/}
      {/*// }*/}
      {/*/>*/}
      <Image source={require('../../../assets/images/logo2.png')} />
    </View>
  );
};
