import React, { memo } from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';

export const MapTemplate = memo(() =>  {
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
            showsCompass={true}
            showsScale={true}
            zoomEnabled={true}
        >
        </MapView>
    </View>
  );
},
);
