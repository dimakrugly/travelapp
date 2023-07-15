import { createSlice } from '@reduxjs/toolkit';
import { authLogin } from './action';

interface UserTypes {
  user: null | {}
  tokens: null | {}
  isLoading: boolean
  failure: null | any
}

const initialState: UserTypes = {
  user: null,
  tokens: null,
  isLoading: false,
  failure: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(authLogin.pending, (state) => {
        state.isLoading = true;
        state.failure = null;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;

        console.log('cTeuT', state);
      })
      .addCase(authLogin.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default user.reducer;
