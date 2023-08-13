import React, {memo, useCallback} from 'react';
import {Marker} from 'react-native-maps';
import {MarkerComponentProps} from './types';

export const MarkerComponent = memo<MarkerComponentProps>(
  ({item, openBottomSheet, onSetCurrent}) => {
    const onMarkerPress = useCallback(() => {
      openBottomSheet();
      onSetCurrent(item.id);
    }, [item.id, onSetCurrent, openBottomSheet]);

    return (
      <Marker
        tappable={true}
        onPress={onMarkerPress}
        coordinate={{
          latitude: item.latitude,
          longitude: item.longitude,
        }}
      />
    );
  },
);
