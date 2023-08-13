import React from 'react';

export interface MapTemplateProps {
  onPinAdd: (event: any) => void;
  pins: any[];
  enableAdd: boolean;
  onPinEnable: () => void;
  onPinsRemove: () => void;
  bottomSheetRef: React.Ref<any>;
  openBottomSheet: () => void;
  onSetCurrent: any;
}

interface Pin {
  id: string;
  latitude: number;
  longitude: number;
  img: undefined | string;
}
