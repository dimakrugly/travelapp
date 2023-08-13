import {createSlice} from '@reduxjs/toolkit';
import {authLogin} from './actions/authLogin';
import {authRegistration} from './actions/authRegistration';

interface UserTypes {
  user: null | {};
  tokens: {
    accessToken: string;
    refreshToken: string;
  };
  isLoading: boolean;
  failure: null | any;
}

const initialState: UserTypes = {
  user: null,
  tokens: {accessToken: '', refreshToken: ''},
  isLoading: false,
  failure: null,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearUser: state => {
      state.user = null;
      state.tokens.accessToken = '';
      state.tokens.refreshToken = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authLogin.pending, state => {
        state.isLoading = true;
        state.failure = null;
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;

        state.tokens.accessToken = action.payload.accessToken;
        state.tokens.refreshToken = action.payload.refreshToken;
      })
      .addCase(authLogin.rejected, state => {
        state.isLoading = false;
      })

      .addCase(authRegistration.pending, state => {
        state.isLoading = true;
        state.failure = null;
      })
      .addCase(authRegistration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;

        state.tokens.accessToken = action.payload.accessToken;
        state.tokens.refreshToken = action.payload.refreshToken;
      })
      .addCase(authRegistration.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const {clearUser} = user.actions;
export default user.reducer;
