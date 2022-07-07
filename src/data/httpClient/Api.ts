import axios from 'axios';

export const routerUrl = 'https://pokeapi.co/api/v2/';

const axiosApi = axios.create({});

axiosApi.interceptors.request.use(
  async config => {
    config.baseURL = routerUrl;
    return config;
  },
  error => Promise.reject(error),
);

axiosApi.defaults.headers.post['Content-Type'] = 'application/json';

export default axiosApi;
