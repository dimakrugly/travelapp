import {useCallback, useEffect, useMemo, useRef} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

export const useBottomSheet = () => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = useMemo(() => ['0%', '50%'], []);

  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const openBottomSheet = useCallback(() => {
    bottomSheetRef.current?.expand();
  }, []);

  const closeBottomSheet = useCallback(() => {
    bottomSheetRef.current?.close();
  }, []);

  useEffect(() => {
    closeBottomSheet();
  }, [closeBottomSheet]);

  return {
    bottomSheetRef,
    snapPoints,
    handleSheetChanges,
    closeBottomSheet,
    openBottomSheet,
  };
};
