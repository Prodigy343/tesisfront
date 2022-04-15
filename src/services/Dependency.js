import axios from '../axiosConfig';

const create = (body) => {
  try {
    return axios.post('/dependencies/', body);
  } catch (e) {
    throw e;
  }
}

const all = (page = 1, pageSize = 10) => {
  try {
    const config = {
      params: {
        page,
        page_size: pageSize
      }
    }
    
    return axios.get('/dependencies/', config);
  } catch (e) {
    throw e;
  }
}

const getById = (name) => {
  try {
    return axios.get('/dependencies/'+name);
  } catch (e) {
    throw e;
  }
}

const update = (name, body) => {
  try {
    return axios.patch('/dependencies/'+name, body);
  } catch (e) {
    throw e;
  }
}

const destroy = (name) => {
  try {
    return axios.delete('/dependencies/'+name);
  } catch (e) {
    throw e;
  }
}

const services = {create, all, getById, update, destroy};

export default services;