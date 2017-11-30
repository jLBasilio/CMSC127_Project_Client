import axios from 'axios';

export const getSession = () => {
    return axios.get('/api/session');
}

export const login = credentials => {
    return axios.post('/api/login', credentials);
}

export const logout = () => {
    return axios.post('/api/logout');
}