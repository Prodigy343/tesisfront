import axios from '../axiosConfig';

const create = ({body}) => {
  try {
    return axios.post('/user', body);
  } catch (e) {
    throw e;
  }
}

const all = () => {
  try {
    return axios.get('/user');
  } catch (e) {
    throw e;
  }
}

const getById = ({id}) => {
  try {
    return axios.get('/user/'+id);
  } catch (e) {
    throw e;
  }
}

const update = ({id, body}) => {
  try {
    return axios.patch('/user/'+id, body);
  } catch (e) {
    throw e;
  }
}

const destroy = ({body}) => {
  try {
    return axios.delete('/user/delete', {data: body});
  } catch (e) {
    throw e;
  }
}

const services = {create, all, getById, update, destroy};

export default services;