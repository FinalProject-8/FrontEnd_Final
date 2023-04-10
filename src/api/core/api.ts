import type { AxiosRequestConfig } from 'axios';
import axios from 'axios';
import { getCookie } from '../../utils/cookiefn';

export const token = getCookie('accessToken');
const axiosConfig: AxiosRequestConfig = {
  baseURL: 'https://www.eduhash0008.shop/',
  headers: {
    'content-type': 'application/json',
  },
};

export const request = axios.create(axiosConfig);

request.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    console.log(error.message);
    return Promise.reject(error);
  },
);

request.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  },
);
