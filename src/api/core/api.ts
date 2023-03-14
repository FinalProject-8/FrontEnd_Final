import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: '',
  headers: {
    'content-type': 'application/json',
    Authorization: 'Bearer ${token}',
  },
};

export const request = axios.create(axiosConfig);
