import axios from 'axios';

const base_url = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
    baseURL: base_url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
});

const requestHandler = request => {
  const localStorageData = JSON.parse(localStorage.getItem('user_settings')) ?? 
    { 
      state: {
        user: {
          token: ""
        }
      } 
    }
  const { state } = localStorageData
  request.headers.Authorization = `Bearer ${state.user.token}`;  
  return request;
};

const errorHandler = error => {
  return Promise.reject(error);
};

instance.interceptors.request.use(
  (request) => requestHandler(request),
  (error) => errorHandler(error)
);

instance.interceptors.response.use(response => {
  if(response.data.status >= 400){
    const error = new Error(response.data.message);
    error.response = response;
    throw error;
  }
  return response.data
});

export const setToken = (token) => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

export default instance