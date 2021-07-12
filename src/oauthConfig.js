import axios from 'axios';

const base_url = process.env.REACT_APP_OAUTH_BASE_URL;

const instance = axios.create({
    baseURL: base_url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    }
});

export default instance;