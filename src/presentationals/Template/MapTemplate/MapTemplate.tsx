import React, {memo} from 'react';
import {TouchableOpacity, View} from 'react-native';
import MapView from 'react-native-maps';
import {MapTemplateProps} from './types';
import {Text} from 'react-native';
import {styles} from './styles';
import {BottomSheet} from '../../Organisms/BottomSheet/BottomSheet';
import {MarkCard} from '../../Organisms/MarkCard/MarkCard';
import {MarkerComponent} from '../../Atoms/MarkerComponent/MarkerComponent';

export const MapTemplate = memo<MapTemplateProps>(
  ({
    onPinAdd,
    pins,
    enableAdd,
    onPinEnable,
    onPinsRemove,
    bottomSheetRef,
    openBottomSheet,
    onSetCurrent,
  }) => {
    return (
      <View>
        <MapView
          style={{height: '100%', width: '100%'}}
          initialRegion={{
            latitude: 48.5132,
            longitude: 32.2597,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          zoomEnabled={true}
          onPress={onPinAdd}>
          {pins.map(item => {
            return (
              <MarkerComponent
                item={item}
                openBottomSheet={openBottomSheet}
                onSetCurrent={onSetCurrent}
                key={item.id}
              />
            );
          })}
        </MapView>
        {!enableAdd && (
          <View style={styles.buttonArea}>
            <TouchableOpacity style={styles.button} onPress={onPinEnable}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 20,
            left: 20,
            width: 50,
            height: 50,
            backgroundColor: 'blue',
          }}
          onPress={onPinsRemove}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            width: 50,
            height: 50,
            backgroundColor: 'pink',
          }}
          onPress={openBottomSheet}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>

        <BottomSheet bottomSheetRef={bottomSheetRef}>
          <Text>Приветики-пистолетики</Text>
        </BottomSheet>
      </View>
    );
  },
);
