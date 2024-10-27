import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://192.168.0.200:3001/'
})


api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    config.headers.authorization = `Bearer ${token}`

    return config;
})