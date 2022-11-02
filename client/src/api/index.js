import axios from 'axios';

export const apiFood = axios.create({
    baseURL: 'http://localhost:3001/'
})