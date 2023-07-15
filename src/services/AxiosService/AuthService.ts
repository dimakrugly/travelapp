import axios from 'axios';

type LoginResponse = {
  token: string;
};

type LoginCredentials = {
  email: string;
  password: string;
};

export const loginApi = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>('https://nest-ln8n-oleksiizhukatt.vercel.app/auth/login', credentials);
  return response.data;
};
