import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// export const authLogin = createAsyncThunk(
//   'auth/login',
//   async (data: any, thunkAPI) => {
//     try {
//       const result = await fetch('https://nest-ln8n-oleksiizhukatt.vercel.app/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(
//           {
//             email: data.email,
//             password: data.password }),
//       }).then(response => response.json())
//         .then(data => {
//           console.log('DATA=', data);
//           return data;
//         });
//       console.log('RESULT=', result);
//       return result;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e);
//     }
//   },
// );



export const authLogin = createAsyncThunk(
  'auth/login',
  async (data: any, thunkAPI) => {
    try {
      const response = await axios.post('https://nest-ln8n-oleksiizhukatt.vercel.app/auth/login', {
        email: data.email,
        password: data.password,
      });

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  },
);



