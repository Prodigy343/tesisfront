import axios from '../axiosConfig';

const create = ({body}) => {
  try {
    return axios.post('/event', body);
  } catch (e) {
    throw e;
  }
}

const all = () => {
  try {
    return axios.get('/event');
  } catch (e) {
    throw e;
  }
}

const getById = ({id}) => {
  try {
    return axios.get('/event/'+id);
  } catch (e) {
    throw e;
  }
}

const update = ({id, body}) => {
  try {
    return axios.patch('/event/'+id, body);
  } catch (e) {
    throw e;
  }
}

const destroy = ({body}) => {
  try {
    return axios.delete('/event/delete', {data: body});
  } catch (e) {
    throw e;
  }
}

const services = {create, all, getById, update, destroy};

export default services;