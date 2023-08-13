import React from 'react';
import {MapTemplate} from '../../presentationals/Template/MapTemplate';
import {useMap} from './hooks/useMap';
import {useBottomSheet} from '../../presentationals/Organisms/BottomSheet/useBottomSheet';

export const MapScreen = () => {
  const {onPinAdd, pins, onPinEnable, enableAdd, onPinsRemove, onSetCurrent} =
    useMap();

  const {openBottomSheet, bottomSheetRef} = useBottomSheet();

  return (
    <MapTemplate
      pins={pins}
      onPinAdd={onPinAdd}
      enableAdd={enableAdd}
      onPinEnable={onPinEnable}
      onPinsRemove={onPinsRemove}
      bottomSheetRef={bottomSheetRef}
      openBottomSheet={openBottomSheet}
      onSetCurrent={onSetCurrent}
    />
  );
};
