import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

export const authRegistration = createAsyncThunk(
  'auth/registration',
  async (data: any, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://nest-ln8n-oleksiizhukatt.vercel.app/auth/registration',
        {
          firstName: data.firstName,
          lastName: data.lastName,
          age: 32,
          email: data.email,
          password: data.password,
          passwordConfirm: data.passwordConfirm,
        },
      );

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);
