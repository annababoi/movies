import {axiosService, token} from "./axios.service";
import {urls} from "../configs";

const movieService = {
    getAll:(page)=>axiosService(urls.movies, {params:{page, api_token: token}}),
    getById:(id)=>axiosService(`${urls.movie}/${id}`),
    searchMovie:({query, page})=>axiosService(urls.search, {params:{query, page}, api_key: token})
}

export {
    movieService
}