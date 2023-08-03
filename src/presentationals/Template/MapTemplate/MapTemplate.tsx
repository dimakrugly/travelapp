import React, { memo } from 'react';
import { TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MapTemplateProps } from './types';
import { Text } from 'react-native';
import { styles } from './styles';

export const MapTemplate = memo<MapTemplateProps>(({ onPinAdd, pins, enableAdd, onPinEnable, onPinsRemove }) =>  {
  return (
    <View>
        <MapView
            style={{ height: '100%', width: '100%' }}
            initialRegion={{
              latitude: 48.5132,
              longitude: 32.2597,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            zoomEnabled={true}
            onPress={(e)=>{
              onPinAdd(e.nativeEvent.coordinate);
            }}
        >
            {pins.map((item)=>{
              return (
                  <Marker
                    key={item.id}
                    tappable={true}
                    onPress={()=>{console.log('PRESSED!');}}
                    coordinate={{
                      latitude: item.latitude,
                      longitude: item.longitude,
                    }} />
              );
            })}
        </MapView>
        {!enableAdd
        &&
            <View
                style={styles.buttonArea}
            >
                <TouchableOpacity style={styles.button} onPress={()=>{onPinEnable();}}>
                    <Text style={styles.text}>+</Text>
                </TouchableOpacity>
            </View>
        }
        <TouchableOpacity style={{ position: 'absolute', top: 20, left: 20, width: 50, height: 50, backgroundColor: 'green' }}
                          onPress={onPinsRemove}>
            <Text style={styles.text}>-</Text>
        </TouchableOpacity>
    </View>
  );
},
);
