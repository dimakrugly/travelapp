import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const authLogin = createAsyncThunk(
  'auth/login',
  async (data: any, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://nest-ln8n-oleksiizhukatt.vercel.app/auth/login',
        {
          email: data.email,
          password: data.password,
        },
      );

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
