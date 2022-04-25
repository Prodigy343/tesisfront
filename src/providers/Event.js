import axios from '../axiosConfig';

const PREFIX_URL = '/event' 

export const createEventProvider = body => 
    axios.post(PREFIX_URL, body)

export const fetchEventsProvider = () => 
    axios.get(PREFIX_URL)

export const fetchEventByIdProvider = id =>
    axios.get(`${PREFIX_URL}/${id}`)

export const updateEventProvider = (id, body) =>
    axios.patch(`${PREFIX_URL}/${id}`, body)

export const deleteEventProvider = id =>
    axios.delete(`${PREFIX_URL}/${id}`)