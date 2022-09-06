import axios from 'axios';

const customAxios = axios.create({
  baseURL: 'http://localhost:5000/',
});

const reqInterceptor = customAxios.interceptors.request.use(
  async (config) => {
    const token = localStorage.getItem('access_token');
    config.headers = {
      'x-access-token': `${token}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

createAxiosResponseInterceptor();

function createAxiosResponseInterceptor() {
  customAxios.interceptors.response.use(
    (response) => {
      console.log('int resp', response);

      //   if (response?.data?.error && response.data.message === 'No token Found') {
      //     localStorage.clear();
      //     window.location.pathname = '/signIn';
      //     return { error: true, message: 'No Token Found' };
      //   }
      return response;
    },
    (error) => {
      if (
        error.response.data.message ===
        'Unauthorized! Access Token was expired!'
      ) {
        customAxios.interceptors.response.eject(reqInterceptor);
        return axios
          .post('http://localhost:5000/auth/refresh', undefined, {
            headers: {
              'x-access-token': `${localStorage.getItem('refresh_token')}`,
            },
          })
          .then((response) => {
            localStorage.setItem('access_token', response.data.data.token);
            localStorage.setItem(
              'refresh_token',
              response.data.data.refreshToken
            );
            error.response.config.headers['x-access-token'] =
              localStorage.getItem('access_token');
            return axios(error.response.config);
          })
          .catch((error) => {
            if (error.response.data.status === 'Refresh token expired') {
              alert(`Your session expired\nPlease Login again to continue.`);
              localStorage.clear();
              window.location.pathname = '/signIn';
              return error.response.data;
            }

            return Promise.reject(error);
          })
          .finally(createAxiosResponseInterceptor);
      }
      return Promise.reject(error);
    }
  );
}

export default customAxios;
