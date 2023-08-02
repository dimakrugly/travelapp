import React, { memo, useState } from 'react';
import { View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

export const MapTemplate = memo(() =>  {
  const [pins, setPins] = useState([]);

  const addPin = (newPinData: { latitude: number, longitude: number }) => {
    const newPin = {
      latitude: newPinData.latitude,
      longitude: newPinData.longitude,
    };

    setPins(pins.concat(newPin));
    console.log(pins);
  };


  return (
    <View>
        <MapView
            style={{ height: '100%', width: '100%' }}
            initialRegion={{
              latitude: 48.5132, // Latitude of Kropyvnytskiy
              longitude: 32.2597, // Longitude of Kropyvnytskiy
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
            zoomEnabled={true}
            onPress={(e)=>{
              addPin(e.nativeEvent.coordinate);
            }}
        >
            {pins.map((item)=>{
              return ( 
                  <Marker coordinate={{
                    latitude: item.latitude,
                    longitude: item.longitude,
                    id: Date.now(),
                  }} />
              );
            })}
            
        </MapView>
    </View>
  );
},
);
