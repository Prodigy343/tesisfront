import axios from '../axiosConfig';

const PREFIX_URL = 'eventTypes'

const create = ({body}) => {
  try {
    return axios.post(`/${PREFIX_URL}`, body);
  } catch (e) {
    throw e;
  }
}

const all = () => {
  try {
    return axios.get(`/${PREFIX_URL}`);
  } catch (e) {
    throw e;
  }
}

const getById = ({id}) => {
  try {
    return axios.get(`/${PREFIX_URL}/${id}`);
  } catch (e) {
    throw e;
  }
}

const update = ({id, body}) => {
  try {
    return axios.patch(`/${PREFIX_URL}/${id}`, body);
  } catch (e) {
    throw e;
  }
}

const destroy = ({body}) => {
  try {
    return axios.delete(`/${PREFIX_URL}/delete`, {data: body});
  } catch (e) {
    throw e;
  }
}

const services = {create, all, getById, update, destroy};

export default services;