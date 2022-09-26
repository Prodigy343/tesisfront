import axios from '../axiosConfig'

const PREFIX_URL = '/dependency' 

export const createDependencyProvider = body =>
    axios.post(PREFIX_URL, body)

export const fetchDependenciesProvider = (page = 1, pageSize = 10) =>
    axios.get(PREFIX_URL, {
        params: {
          page,
          page_size: pageSize
        }
    })

export const fetchDependencyByNameProvider = name => 
    axios.get(`${PREFIX_URL}/${name}`)

export const updateDependencyProvider = (name, body) =>
    axios.patch(`${PREFIX_URL}/${name}`, body)

export const deleteDependencyProvider = name =>
    axios.delete(`${PREFIX_URL}/${name}`)