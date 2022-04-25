import axios from '../axiosConfig'
import oauth from '../oauthConfig'
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET

const PREFIX_URL = '/users'

export const createUserProvider = body =>
    axios.post(`${PREFIX_URL}/register`, body)

export const loginProvider = (body, refresh = false) =>
    oauth.post('/token', {
        grant_type: refresh ? 'refresh_token' : 'password',
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        ...body
    })

export const logoutProvider = () =>
    axios.get(`${PREFIX_URL}/logout`)

export const fetchUsersProvider = () =>
    axios.get(`${PREFIX_URL}`)

export const fetchUserByIdProvider = id =>
    axios.get(`${PREFIX_URL}/${id}`)

export const updateUserProvider = (id, body) =>
    axios.patch(`${PREFIX_URL}/${id}`, body)

export const deleteUserProvider = body =>
    axios.delete(`${PREFIX_URL}/delete`, {data: body})