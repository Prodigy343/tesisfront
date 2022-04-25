import axios from '../axiosConfig';

const PREFIX_URL = '/eventTypes'

export const createEventTypeProvider = body => 
    axios.post(PREFIX_URL, body)

export const fetchEventTypesProvider = () => 
    axios.get(PREFIX_URL)

export const fetchEventTypeByIdProvider = id =>
    axios.get(`${PREFIX_URL}/${id}`)

export const updateEventTypeProvider = (id, body) =>
    axios.patch(`${PREFIX_URL}/${id}`, body)

export const deleteEventTypeProvider = id =>
    axios.delete(`${PREFIX_URL}/${id}`)