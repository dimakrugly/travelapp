import { createSlice } from '@reduxjs/toolkit';
import { authLogin } from './action';

interface UserTypes {
  user: null | {}
  tokens: {
    accessToken: string;
    refreshToken: string;
  }
  isLoading: boolean
  failure: null | any
}

const initialState: UserTypes = {
  user: null,
  tokens: { accessToken: '',
    refreshToken:'' },
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
        
        state.tokens.accessToken = action.payload.accessToken;
        state.tokens.refreshToken = action.payload.refreshToken;

        console.log('CTEuT', state);
      })
      .addCase(authLogin.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default user.reducer;
