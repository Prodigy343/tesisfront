import axios from '../axiosConfig';

const create = ({body}) => {
  try {
    return axios.post('/eventtypes', body);
  } catch (e) {
    throw e;
  }
}

const all = () => {
  try {
    return axios.get('/eventtypes');
  } catch (e) {
    throw e;
  }
}

const getById = ({id}) => {
  try {
    return axios.get('/eventtypes/'+id);
  } catch (e) {
    throw e;
  }
}

const update = ({id, body}) => {
  try {
    return axios.patch('/eventtypes/'+id, body);
  } catch (e) {
    throw e;
  }
}

const destroy = ({body}) => {
  try {
    return axios.delete('/eventtypes/delete', {data: body});
  } catch (e) {
    throw e;
  }
}

const services = {create, all, getById, update, destroy};

export default services;