import {createSelector} from '@reduxjs/toolkit';
import {RootState} from '../../store';

export const selectPinsData = (state: RootState) => state.pins;

export const selectPins = createSelector(selectPinsData, ({pins}) => pins);
export const selectActivePin = createSelector(
  selectPinsData,
  ({activePin}) => activePin,
);
