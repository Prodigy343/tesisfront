import axios from 'axios';

const base_url = process.env.REACT_APP_BASE_URL;

const instance = axios.create({
    baseURL: base_url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
});

export default instance;