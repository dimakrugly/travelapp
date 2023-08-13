import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PinsTypes {
  pins: Pin[];
  current: undefined | Pin;
}

interface Pin {
  id: string;
  latitude: number;
  longitude: number;
  img?: string;
  name?: string;
  description?: string;
}

const initialState: PinsTypes = {
  pins: [],
  current: undefined,
};


const pins = createSlice({
  name: 'pins',
  initialState,
  reducers: {
    addPin: (state, action: PayloadAction<Pin>) => {
      state.pins.push(action.payload);
    },
    updatePinName: (state, action: PayloadAction<{ id: string; name: string }>) => {
      const { id, name } = action.payload;
      const pinToUpdate = state.pins.find(pin => pin.id === id);
      if (pinToUpdate) {
        pinToUpdate.name = name;
      }
    },
    updatePinDescription: (state, action: PayloadAction<{ id: string; description: string }>) => {
      const { id, description } = action.payload;
      const pinToUpdate = state.pins.find(pin => pin.id === id);
      if (pinToUpdate) {
        pinToUpdate.description = description;
      }
    },
    setCurrent: (state, action: PayloadAction<{ id: string }>) => {
      const { id } = action.payload;
      state.current = state.pins.find(pin => pin.id === id);
    },
    clearPins: (state) => {
      state.pins = [];
    },
  },
});

export const { addPin, updatePinName, updatePinDescription, setCurrent, clearPins } = pins.actions;

export default pins.reducer;