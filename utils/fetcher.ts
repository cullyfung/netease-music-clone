import axios, { AxiosInstance } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const fetcher: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000
});

fetcher.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

fetcher.interceptors.response.use((response) => {
  const { data } = response;
  if (data && data.status === 'error') {
    throw new Error(data.message);
  }
  return response;
});

export { fetcher };
