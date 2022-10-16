import axios from "axios";

import {baseURL} from "../configs";
export const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDdkYTlkMzUzZTA2YzJmZjgzNDU2NTlmYjAwN2RiMyIsInN1YiI6IjYzNGJlMjM4NjhiMWVhMDA3YTZkMDI1MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6bMMx95r9Tpq6Gu73RN_RQo73j_uRrHNUxpdNRvPCHU'
const axiosService = axios.create({baseURL});


axiosService.interceptors.request.use((config) => {

    config.headers.Authorization = `Bearer ${token}`
    return config
});

export {
    axiosService
}