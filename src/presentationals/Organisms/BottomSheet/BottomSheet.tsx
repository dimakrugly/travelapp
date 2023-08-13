import React from 'react';
import {BottomSheetProps} from './types';
import BotSheet from '@gorhom/bottom-sheet';

export const BottomSheet: React.FC<BottomSheetProps> = ({
  bottomSheetRef,
  children,
}) => {
  return (
    <BotSheet
      style={{alignItems: 'center'}}
      ref={bottomSheetRef}
      snapPoints={['1%', '90%']}
      enablePanDownToClose={true}>
      {children}
    </BotSheet>
  );
};
