import axios from 'axios';
import Cookies from 'js-cookie';

const server = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
  timeoutErrorMessage: 'Network Error',
});

server.interceptors.request.use((config) => {
  const token = Cookies.get('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default server;
