import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';

const selectUserData = (state: RootState) => state.user;

export const selectUser = createSelector(selectUserData, ({ user }) => user);
export const selectLoader = createSelector(selectUserData, (state) => state.isLoading);