import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PinsTypes, Pin} from '../../../types/store/pins';

const initialState: PinsTypes = {
  pins: [],
  activePin: undefined,
};

const pins = createSlice({
  name: 'pins',
  initialState,
  reducers: {
    addPin: (state, action: PayloadAction<Pin>) => {
      state.pins.push(action.payload);
    },
    updatePins: (state, action) => {
      state.pins = action.payload;
    },
    updatePinsName: (
      state,
      action: PayloadAction<{id: string; name: string}>,
    ) => {
      const {id, name} = action.payload;
      const {pins} = state;
      const pinToUpdate = pins.find(pin => pin.id === id);
      if (pinToUpdate) {
        pinToUpdate.name = name;
      }
    },
    updatePinDescription: (
      state,
      action: PayloadAction<{id: string; description: string}>,
    ) => {
      const {id, description} = action.payload;
      const pinToUpdate = state.pins.find(pin => pin.id === id);
      if (pinToUpdate) {
        pinToUpdate.description = description;
      }
    },
    setActivePin: (state, action: PayloadAction<{id: string}>) => {
      const {id} = action.payload;
      state.activePin = state.pins.find(pin => pin.id === id);
    },
    clearPins: state => {
      state.pins = [];
    },
  },
});

export const {
  addPin,
  updatePins,
  updatePinName,
  updatePinDescription,
  setActivePin,
  clearPins,
} = pins.actions;

export default pins.reducer;
