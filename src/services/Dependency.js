import axios from '../axiosConfig';

const create = ({body}) => {
  try {
    return axios.post('/dependencies/', body);
  } catch (e) {
    throw e;
  }
}

const all = () => {
  try {
    return axios.get('/dependencies/');
  } catch (e) {
    throw e;
  }
}

const getById = ({id}) => {
  try {
    return axios.get('/dependencies/'+id);
  } catch (e) {
    throw e;
  }
}

const update = ({id, body}) => {
  try {
    return axios.patch('/dependencies/'+id, body);
  } catch (e) {
    throw e;
  }
}

const destroy = ({body}) => {
  try {
    return axios.delete('/dependencies/delete', {data: body});
  } catch (e) {
    throw e;
  }
}

const services = {create, all, getById, update, destroy};

export default services;