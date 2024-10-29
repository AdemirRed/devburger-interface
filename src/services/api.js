import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://192.168.0.200:3001/'
})


api.interceptors.request.use((config) => {
    const userData = localStorage.getItem('devburger:userDate');

    const token = userData && JSON.parse(userData).token

    config.headers.authorization = `Bearer ${token}`

    return config;
})