import React from 'react';
import { MapTemplate } from '../../presentationals/Template/MapTemplate';
import { useMap } from './hooks/useMap';

export const MapScreen: React.FC = () => {

  const { onPinAdd, pins, onPinEnable, enableAdd, onPinsRemove } = useMap();

  return (
   <MapTemplate
       pins={pins}
       onPinAdd={onPinAdd}
       enableAdd={enableAdd}
       onPinEnable={onPinEnable}
       onPinsRemove={onPinsRemove}
   />
  );
};

