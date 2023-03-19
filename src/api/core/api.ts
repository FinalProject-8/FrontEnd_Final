import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';

const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://0e7ac26b-1b6c-42c5-bdbe-c19d2b6faabd.mock.pstmn.io',
  headers: {
    'content-type': 'application/json',
  },
};

export const request = axios.create(axiosConfig);
