import axios from '../axiosConfig'
import oauth from '../oauthConfig'
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const PREFIX_URL = 'users'

const create = ({body}) => {
  try {
    return axios.post(`${PREFIX_URL}/register`, body)
  } catch (e) {
    throw e
  }
}

const login = (body, refresh = false) => {
  try {
    const processedBody = {
      grant_type: refresh ? 'refresh_token' : 'password',
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      ...body
    }
    return oauth.post('/oauth/token', processedBody)
  } catch (e) {
    throw e
  }
}

const all = () => {
  try {
    return axios.get(`${PREFIX_URL}`)
  } catch (e) {
    throw e;
  }
}

const getById = ({id}) => {
  try {
    return axios.get(`${PREFIX_URL}/${id}`)
  } catch (e) {
    throw e
  }
}

const update = ({id, body}) => {
  try {
    return axios.patch(`${PREFIX_URL}/${id}`, body)
  } catch (e) {
    throw e
  }
}

const destroy = ({body}) => {
  try {
    return axios.delete(`${PREFIX_URL}/delete`, {data: body})
  } catch (e) {
    throw e
  }
}

const services = {create, login, all, getById, update, destroy}

export default services