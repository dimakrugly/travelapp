import React from 'react';

export interface test {
  onPinAdd: (event: any) => void;
  pins: any[];
  enableAdd: boolean;
  onPinEnable: () => void;
  onPinsRemove: () => void;
  bottomSheetRef: React.Ref<any>;
  openBottomSheet: () => void;
  onSetCurrent: any;
}

export type MapTemplateProps = test & useControlPinsProps;

interface Pin {
  id: string;
  latitude: number;
  longitude: number;
  img: undefined | string;
}

interface useControlPinsProps {
  name: string;
  description: string;
  onChangeName: (name: string) => void;
  onChangeDescription: (description: string) => void;
  onSavePinChanges: () => void;
}
