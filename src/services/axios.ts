import axios from 'axios';
import type { AxiosError } from 'axios';

const axiosApiInstance = axios.create();

axiosApiInstance.interceptors.request.use(
  async (config) => {
    return {
      ...config,
      baseURL: 'https://restcountries.com/v3.1',
    };
  },
  (error) => Promise.reject(error),
);

axiosApiInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => Promise.reject(error.response),
);

export default axiosApiInstance;
