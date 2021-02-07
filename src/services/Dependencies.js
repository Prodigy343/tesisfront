import axios from 'axios';

const base_url = process.env.REACT_APP_BASE_URL;

const create = ({body}) => {
  try {
    return axios.post(base_url+'/dependencies', body);
  } catch (e) {
    throw e;
  }
}

const all = () => {
  try {
    return axios.get(base_url+'/dependencies');
  } catch (e) {
    throw e;
  }
}

const getById = ({id}) => {
  try {
    return axios.get(base_url+'/dependencies/'+id);
  } catch (e) {
    throw e;
  }
}

const update = ({id, body}) => {
  try {
    return axios.patch(base_url+'/dependencies/'+id, body);
  } catch (e) {
    throw e;
  }
}

const deleteById = ({id}) => {
  try {
    return axios.delete(base_url+'/dependencies/'+id);
  } catch (e) {
    throw e;
  }
}

const deleteMany = ({body}) => {
  try {
    return axios.delete(base_url+'/dependencies/', body);
  } catch (e) {
    throw e;
  }
}

const services = {create, all, getById, update, deleteById, deleteMany};

export default services;