import axios from 'axios';

const axiosConfig = {
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 30000,
};

export const request = axios.create(axiosConfig);

// Request interceptor for API calls
request.interceptors.request.use(
  async config => {
    config.headers = {
      Accept: 'application/json',
    };
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

// Response interceptor for API calls
request.interceptors.response.use(
  async response => {
    return response.data;
  },
  async function (error) {
    return Promise.reject(error);
  },
);
