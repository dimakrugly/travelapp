import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export const selectPinsData = (state: RootState) => state.pins;



export const selectPins = createSelector(selectPinsData, ({ pins }) => pins);
export const selectCurrentPin = createSelector(selectPinsData, ({ current }) => current);


