import axios from 'axios';

export const getBillById = (id) => {
    return axios.get('/api/session', id);
}

export const login = credentials => {
    return axios.post('/api/login', credentials);
}

export const logout = () => {
    return axios.post('/api/logout');
}