import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PinsTypes {
  pins: Pin[];
}

interface Pin {
  latitude: number;
  longitude: number;
}

const initialState: PinsTypes = {
  pins: [],
};


const pins = createSlice({
  name: 'pins',
  initialState,
  reducers: {
    addPin: (state, action: PayloadAction<Pin>) => {
      state.pins.push(action.payload);
    },
    clearPins: (state) => {
      state.pins = [];
    },
  },
});

export const { addPin, clearPins } = pins.actions;

export default pins.reducer;