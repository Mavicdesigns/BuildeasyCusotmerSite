import axios from 'axios'

export const http = axios.create({
    baseURL: 'http://api.buildeasy.xyz/',
    withCredentials: false,
   
});